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
    children: React.PropTypes.element.isRequired,
    onCopy: React.PropTypes.func
  },


  render() {
    const {text, onCopy, children, ...props} = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, {
      ...props,
      onClick: onClick(text, onCopy)
    });
  }
});


export default CopyToClipboard;
