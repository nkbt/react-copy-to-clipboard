import React from 'react';
import CopyToClipboard from '../CopyToClipboard';


const App = React.createClass({
  getInitialState() {
    return {value: '', copied: false};
  },


  onChange({target: {value}}) {
    this.setState({value, copied: false});
  },


  onCopy() {
    this.setState({copied: true});
  },


  render() {
    return (
      <div>
        <input value={this.state.value} size={10} onChange={this.onChange} />&nbsp;

        <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>&nbsp;


        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}

        <br />

        <textarea style={{marginTop: '1em'}} cols="22" rows="3" />

      </div>
    );
  }
});


export default App;
