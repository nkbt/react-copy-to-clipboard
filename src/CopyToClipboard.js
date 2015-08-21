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
    onCopy: React.PropTypes.func
  },


  render() {
    const {text, onCopy, ...props} = this.props;

    return <button onClick={onClick(text, onCopy)} {...props} />;
  }
});


export default CopyToClipboard;
