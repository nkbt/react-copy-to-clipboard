module.exports = {
  'Test for component appears on the screen': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Component')
      .end();
  }
};
