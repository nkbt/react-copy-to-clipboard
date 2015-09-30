# react-copy-to-clipboard

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-copy-to-clipboard.svg?style=svg)](https://circleci.com/gh/nkbt/react-copy-to-clipboard)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-copy-to-clipboard/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-copy-to-clipboard?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard)
[![devDependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard/dev-status.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard#info=devDependencies)

Copy to clipboard React component

Based on [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

> Would try to use execCommand with fallback to IE specific clipboardData interface and finally, fallback to simple prompt with proper text content & 'Copy to clipboard: Ctrl+C, Enter'


![Copy to clipboard](https://cdn.rawgit.com/nkbt/react-copy-to-clipboard/master/src/example/copy-to-clipboard.gif)


## Installation

### npm

```sh
npm install --save react-copy-to-clipboard
```

### bower

```sh
bower install --save react-copy-to-clipboard
```

## Usage

```js
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const App = React.createClass({
  getInitialState() {
    return {value: '', copied: false};
  },

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />&nbsp;

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>&nbsp;

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
});


React.render(<App />, document.body);
```

## Options


#### `text`: React.PropTypes.string.isRequired

Text to be copied to clipboard


#### `onCopy`: React.PropTypes.func

Optional callback, will be called when text is copied


#### `children`: React.PropTypes.node.isRequired

CopyToClipboard is a simple wrapping component, it does not render any tags, so it requires the only child element to be present, which will be used to capture clicks.

```js
<CopyToClipboard text="Hello!">
  <button>Copy to clipboard</button>
</CopyToClipboard>
```


## Development and testing

To run comprehensive example covering all `InFlux` features, use `npm start`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-copy-to-clipboard.git
cd react-copy-to-clipboard
npm install
npm start

# then
open http://localhost:8080
```


## Demo

[http://nkbt.github.io/react-copy-to-clipboard/example](http://nkbt.github.io/react-copy-to-clipboard/example)


## Codepen demo

[http://codepen.io/nkbt/pen/eNPoQv](http://codepen.io/nkbt/pen/eNPoQv)


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
