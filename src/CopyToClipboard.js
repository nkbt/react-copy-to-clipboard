import React from 'react';
import copy from 'copy-to-clipboard';


const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    onClick: React.PropTypes.func,
    onCopy: React.PropTypes.func
  },


  onClick(e) {
    const {text, onCopy, onClick} = this.props;

    copy(text);
    if (onCopy) {
      onCopy(text);
    }

    // Bypass onClick if it was present
    if (onClick) {
      onClick(e);
    }
  },


  render() {
    const {
      text: _text,
      onCopy: _onCopy,
      onClick: _onClick,
      children,
      ...props
    } = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, {...props, onClick: this.onClick});
  }
});


export default CopyToClipboard;
