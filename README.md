# react-component-template

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-component-template.svg?style=shield)](https://circleci.com/gh/nkbt/react-component-template)
[![Appveyor](https://ci.appveyor.com/api/projects/status/mql8v50s8ghr0w1q?svg=true)](https://ci.appveyor.com/project/nkbt/react-component-template)
[![codecov.io](https://codecov.io/github/nkbt/react-component-template/coverage.svg?branch=master)](https://codecov.io/github/nkbt/react-component-template?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-component-template.svg)](https://david-dm.org/nkbt/react-component-template)
[![devDependency Status](https://david-dm.org/nkbt/react-component-template/dev-status.svg)](https://david-dm.org/nkbt/react-component-template#info=devDependencies)

Base for React Components

## Reason

Developing and publishing multiple React components requires a lot of work to keep them all at the same code, ops, best-practices level. Most of configs are often copy-pasted. If one project updated, for example, .eslintrc, other projects should follow to keep codebase consistent. Having growing number of components leads to a more diverged codebase that is exponentially harder to manage.


## Contents

- React module boilerplate dependencies and scripts
- .gitignore and .npmignore
- CircleCI config
- ESLint config, strict version of Airbnb code style guide
- Empty React component
- Example
- Tests and coverage (Tape, Isparta)
- End-to-End tests (Nightwatch, Selenium)


## Usage

1. Add as remote

  ```sh
  git remote add template git@github.com:nkbt/react-component-template.git
  ```

2. Merge to existing repo

  ```sh
  git merge --no-ff template/master
  ```

3. Fix conflicts
4. If update needed, repeat


# Template-based component features

## Installation

Considering the name is `react-my-component` and it is published to NPM

### NPM

```sh
npm install --save react react-my-component
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-my-component/bower.zip
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-my-component": "https://npmcdn.com/react-my-component/bower.zip"
  }
}
```

then include as
```html
<script src="bower_components/react/react.js"></script>
<script src="bower_components/react-my-component/build/react-my-component.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-my-component/build/react-my-component.js"></script>
(Module exposed as `ReactMyComponent`)
```


## Demo

Publishing on `gh-pages`:
- do a build
- allow `/example` in `.gitignore`
- commit and push to `gh-pages`

[http://nkbt.github.io/react-my-component/example](http://nkbt.github.io/react-my-component/example)

## Codepen demo

```js
// TODO
```


## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from 'react-my-component';

const App = React.createClass({
  render() {
    return (
      <div>
        <MyComponent some="prop" />
      </div>
    );
  }
});

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options


```js
// TODO: list component props
```


## Development and testing

Currently is being developed and tested with the latest stable `Node 5` on `OSX` and `Windows`.
Should be ok with Node 4, but not guaranteed.

To run example covering all `MyComponent` features, use `npm start`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-my-component.git
cd react-my-component
npm install
npm start

# then
open http://localhost:8080
```

## Tests

```bash
npm test

# to run tests in watch mode for development
npm run test:dev

# to generate test coverage (./reports/coverage)
npm run test:cov
```

## License

MIT
