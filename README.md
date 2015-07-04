# react-copy-to-clipboard

[![Circle CI](https://circleci.com/gh/nkbt/react-copy-to-clipboard.svg?style=svg)](https://circleci.com/gh/nkbt/react-copy-to-clipboard)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-copy-to-clipboard/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-copy-to-clipboard?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard)
[![devDependency Status](https://david-dm.org/nkbt/react-copy-to-clipboard/dev-status.svg)](https://david-dm.org/nkbt/react-copy-to-clipboard#info=devDependencies)

Copy to clipboard React component

Based on [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

> Would try to use execCommand with fallback to IE specific clipboardData interface and finally, fallback to simple prompt with proper text content & 'Copy to clipboard: Ctrl+C, Enter'


## Options


#### `text`: React.PropTypes.string.isRequired

Text to be copied to clipboard


#### `onCopy`: React.PropTypes.func

Optional callback, will be called when text is copied


#### `children`: React.PropTypes.node.isRequired

CopyToClipboard is a simple wrapping component, id does not render any tags, so it requires one child element to be present, which will be used to capture clicks.

```js
<CopyToClipboard text="Hello!">
  <button>Copy to clipboard</button>
</CopyToClipboard>
```


#### `dataHandler`: PropTypes.string

Custom data attribute name for click-swap handler.
Defaults to `swapHandler` which is `data-swap-handler`





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
          <button>Copy to clibpoard</button>
        </CopyToClipboard>&nbsp;


        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        
        

      </div>
    );
  }
});


React.render(<App />, document.body);
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


## Tests

Only UI tests for now, see [demo](http://nkbt.github.io/react-copy-to-clipboard/example)


## License

MIT
