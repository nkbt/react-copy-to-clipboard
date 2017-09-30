import React from 'react';
import {CopyToClipboard} from '../../src';


export class App extends React.PureComponent {
  state = {value: 'some\ntext', copied: false};

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
      <div className="app">
        <h1>react-copy-to-clipboard</h1>

        <section className="section">
          <textarea onChange={this.onChange} rows={2} cols={10} value={this.state.value} />
        </section>

        <section className="section">
          <h2>1. Button</h2>
          <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </section>

        <section className="section">
          <h2>2. Span</h2>
          <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        </section>

        <section className="section">
          <h2>3. with onClick</h2>
          <CopyToClipboard
            onCopy={this.onCopy}
            options={{message: 'Whoa!'}}
            text={this.state.value}>
            <button onClick={this.onClick}>Copy to clipboard with onClick prop</button>
          </CopyToClipboard>
        </section>

        <section className="section">
          {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        </section>

        <section className="section">
          <textarea cols="22" rows="3" style={{marginTop: '1em'}} />
        </section>
      </div>
    );
  }
}
