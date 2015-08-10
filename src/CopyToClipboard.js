import React from 'react';
import copy from 'copy-to-clipboard';


const onClick = (text, onCopy) => () => {
  copy(text);
  if (onCopy) {
    onCopy(text);
  }
};


const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.node,
    onCopy: React.PropTypes.func
  },


  render() {
    const {text, onCopy, ...props} = this.props;

    return <button {...props} onClick={onClick(text, onCopy)} />;
  }
});


export default CopyToClipboard;
