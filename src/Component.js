import React from 'react';
import {name} from '../package.json';


const ReactComponentTemplate = React.createClass({
  render() {
    return <div>{name}</div>;
  }
});


export default ReactComponentTemplate;
