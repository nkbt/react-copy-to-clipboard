import React from 'react';
import ReactComponentTemplate from '../../ReactComponentTemplate';
import css from './App.css';


const App = React.createClass({
  render() {
    return (
      <div className={css.app}>
        <ReactComponentTemplate />
      </div>
    );
  }
});


export default App;
