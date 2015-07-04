import React from 'react';
import Component from '..';


const App = React.createClass({
  render() {
    return (
      <div>
        <Component />
      </div>
    );
  }
});


React.render(<App />, document.body);
