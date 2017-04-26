import React from 'react';
import CopyToClipboard from '../..';
import {name} from '../../../package.json';
import css from './App.css';


class App extends React.PureComponent {
  state = {value: '', copied: false};

  onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };

  onClick = ({target: {innerHTML}}) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  onCopy = () => {
    this.setState({copied: true});
  };

  render() {
    return (
      <div className={css.app}>
        <h1>{name}</h1>

        <input onChange={this.onChange} size={10} value={this.state.value} />&nbsp;

        <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>&nbsp;

        <CopyToClipboard onCopy={this.onCopy} options={{message: 'Whoa!'}} text={this.state.value}>
          <button onClick={this.onClick}>Copy to clipboard with onClick prop</button>
        </CopyToClipboard>&nbsp;


        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}

        <br />

        <textarea cols="22" rows="3" style={{marginTop: '1em'}} />

      </div>
    );
  }
}


export default App;
