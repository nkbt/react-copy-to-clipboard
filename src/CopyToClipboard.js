import React from 'react';
import copy from 'copy-to-clipboard';


const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    onCopy: React.PropTypes.func
  },


  onClick() {
    copy(this.props.text);
    if (this.props.onCopy) {
      this.props.onCopy(this.props.text);
    }
  },


  render() {
    return React.cloneElement(React.Children.only(this.props.children), {onClick: this.onClick});
  }
});


export default CopyToClipboard;
