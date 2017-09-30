#!/usr/bin/env node
'use strict';


const path = require(`path`);
const nightwatch = require(`nightwatch`);
const finalhandler = require(`finalhandler`);
const http = require(`http`);
const serveStatic = require(`serve-static`);
const {CWD} = require(`./utils/bash`);
const portfinder = require(`portfinder`);


const {
  DOCKER_IP
} = process.env;


if (!DOCKER_IP) {
  console.error(new Error(`DOCKER_IP ENV is required`));
}


const nextTick = () => new Promise(resolve => process.nextTick(resolve));


let count = 0;
const listen = server => new Promise(async (resolve, reject) => {
  const port = await portfinder.getPortPromise({port: 3000});
  server.listen(port, `0.0.0.0`, err => {
    if (!err) {
      Object.assign(server, {port});
      return resolve();
    }

    if (!err.message.includes(`EADDRINUSE`) || count > 10) {
      return reject(err);
    }

    count += 1;
    return listen(server).then(resolve, reject);
  });
});


const createServer = async ({cwd}) => {
  const serve = serveStatic(`${cwd}/pub`);
  const server = http.createServer((req, res) => serve(req, res, finalhandler(req, res)));
  await listen(server);
  console.log(`Server "${path.basename(cwd)}" is listening on ${DOCKER_IP}:${server.port}`);
  await nextTick();
  return server;
};


const wait = func =>
  new Promise((resolve, reject) => func((err, ...args) => err ? reject(err) : resolve(...args)));


const run = async ({cwd}) => {
  const server = await createServer({cwd});
  const finish = () => new Promise(resolve => server.close(() => process.nextTick(resolve)));
  const die = async err => {
    console.error(err.message);
    console.log(err.stack);
    await finish();
    process.exit(1);
  };


  process.on(`uncaughtException`, die);
  process.on(`unhandledRejection`, die);


  const client = nightwatch.initClient({
    selenium_port: 4444,
    selenium_host: `localhost`,
    silent: true,
    output: true,
    detailed_output: true
  });


  const browser = client.api();

  browser
    .url(`http://${DOCKER_IP}:${server.port}`)
    .waitForElementVisible(`body`, 1000)
    .assert.containsText(`body`, require(`${cwd}/package.json`).name)
    .end();

  try {
    await wait(client.start.bind(client));
  } catch (_err) {
    await finish();
    process.exit(1);
  }

  await finish();
  process.exit(0);
};


require(`./pub`);


run({cwd: CWD});
