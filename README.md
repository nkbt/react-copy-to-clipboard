# react-copy-to-clipboard [![npm](https://img.shields.io/npm/v/react-copy-to-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/react-copy-to-clipboard)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-copy-to-clipboard.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/react-copy-to-clipboard)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-copy-to-clipboard.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-copy-to-clipboard)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-copy-to-clipboard.svg?style=flat-square)](https://codecov.io/github/nkbt/react-copy-to-clipboard?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-copy-to-clipboard.svg?style=flat-square)](https://david-dm.org/nkbt/react-copy-to-clipboard)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-copy-to-clipboard.svg?style=flat-square)](https://david-dm.org/nkbt/react-copy-to-clipboard#info=devDependencies)

Copy to clipboard React component

Based on [copy-to-clipboard](https://npm.im/copy-to-clipboard)

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
bower install --save https://unpkg.com/react-copy-to-clipboard/bower.zip
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-copy-to-clipboard": "https://unpkg.com/react-copy-to-clipboard/bower.zip"
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
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
(Module exposed as `CopyToClipboard`)
```


## Demo

[http://nkbt.github.io/react-copy-to-clipboard](http://nkbt.github.io/react-copy-to-clipboard)

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
          onChange={({target: {value}}) => this.setState({value, copied: false})} />

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

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

```
onCopy(text, result)
```
`result (bool)`: Returns `true` if copied successfully, else `false`.


#### `options`: React.PropTypes.shape({debug: bool, message: string})

Optional [copy-to-clipboard](https://npm.im/copy-to-clipboard) options.

See [API docs](https://npm.im/copy-to-clipboard#api) for details

#### `children`: React.PropTypes.node.isRequired

CopyToClipboard is a simple wrapping component, it does not render any tags, so it requires the only child element to be present, which will be used to capture clicks.

```js
<CopyToClipboard text="Hello!">
  <button>Copy to clipboard</button>
</CopyToClipboard>
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 6` on `OSX` and `Windows`.

To run example covering all `CopyToClipboard` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-copy-to-clipboard.git
cd react-copy-to-clipboard
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
