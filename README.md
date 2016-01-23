# react-copy-to-clipboard

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-copy-to-clipboard.svg?style=shield)](https://circleci.com/gh/nkbt/react-copy-to-clipboard)
[![Appveyor](https://ci.appveyor.com/api/projects/status/0b872jlqe0kvd4sx?svg=true)](https://ci.appveyor.com/project/nkbt/react-copy-to-clipboard)
[![codecov.io](https://codecov.io/github/nkbt/react-copy-to-clipboard/coverage.svg?branch=master)](https://codecov.io/github/nkbt/react-copy-to-clipboard?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard)
[![devDependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard/dev-status.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard#info=devDependencies)

Copy to clipboard React component

Based on [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

> Would try to use execCommand with fallback to IE specific clipboardData interface and finally, fallback to simple prompt with proper text content & 'Copy to clipboard: Ctrl+C, Enter'


![Copy to clipboard](https://cdn.rawgit.com/nkbt/react-copy-to-clipboard/master/src/example/copy-to-clipboard.gif)


## Installation

### NPM

```sh
npm install --save react react-copy-to-clipboard
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-copy-to-clipboard/bower.zip
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-copy-to-clipboard": "https://npmcdn.com/react-copy-to-clipboard/bower.zip"
  }
}
```

then include as
```html
<script src="bower_components/react/react.js"></script>
<script src="bower_components/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
(Module exposed as `CopyToClipboard`)
```


## Demo

[http://nkbt.github.io/react-copy-to-clipboard/example](http://nkbt.github.io/react-copy-to-clipboard/example)

## Codepen demo

[http://codepen.io/nkbt/pen/eNPoQv](http://codepen.io/nkbt/pen/eNPoQv?editors=0010)

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
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

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
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

Currently is being developed and tested with the latest stable `Node 5` on `OSX` and `Windows`.
Should be ok with Node 4, but not guaranteed.

To run example covering all `CopyToClipboard` features, use `npm start`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-copy-to-clipboard.git
cd react-copy-to-clipboard
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
