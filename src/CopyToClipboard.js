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
    onCopy: React.PropTypes.func,
    children: React.PropTypes.array
  },


  render() {
    const {text, onCopy, children, ...props} = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, Object.assign({
      onClick: onClick(text, onCopy)
    }, props));
  }
});


export default CopyToClipboard;
