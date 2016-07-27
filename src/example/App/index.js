import React from 'react';
import CopyToClipboard from '../..';
import {name} from '../../../package.json';
import css from './App.css';


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


  onClick({target: {innerHTML}}) {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  },


  render() {
    return (
      <div className={css.app}>
        <h1>{name}</h1>

        <input value={this.state.value} size={10} onChange={this.onChange} />&nbsp;

        <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard text={this.state.value} onCopy={this.onCopy} options={{message: 'Whoa!'}}>
          <button onClick={this.onClick}>Copy to clipboard with onClick prop</button>
        </CopyToClipboard>&nbsp;


        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}

        <br />

        <textarea style={{marginTop: '1em'}} cols="22" rows="3" />

      </div>
    );
  }
});


export default App;
