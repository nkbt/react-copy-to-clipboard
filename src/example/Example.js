import React from 'react';
import CopyToClipboard from '..';


const App = React.createClass({
  getInitialState() {
    return {value: '', copied: false};
  },


  render() {
    return (
      <div>

        <input value={this.state.value}
          size={10}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />&nbsp;

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clibpoard</button>
        </CopyToClipboard>&nbsp;


        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}

        <br />
        <textarea style={{marginTop: '1em'}} cols="22" rows="3"></textarea>

      </div>
    );
  }
});


React.render(<App />, document.body);
