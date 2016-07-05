import React from 'react';
import copy from 'copy-to-clipboard';


const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    onCopy: React.PropTypes.func
  },


  onClick(event) {
    const {text, onCopy, children} = this.props;
    const elem = React.Children.only(children);

    copy(text);
    if (onCopy) {
      onCopy(text);
    }

    // Bypass onClick if it was present
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  },


  render() {
    const {
      text: _text,
      onCopy: _onCopy,
      children,
      ...props
    } = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, {...props, onClick: this.onClick});
  }
});


export default CopyToClipboard;
