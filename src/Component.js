import React from 'react';
import copy from 'copy-to-clipboard';


export const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    onCopy: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onFail: React.PropTypes.func,
    options: React.PropTypes.shape({
      debug: React.PropTypes.bool,
      message: React.PropTypes.string
    })
  },


  onClick(event) {
    const {
      text,
      onCopy,
      onSuccess,
      onFail,
      children,
      options
    } = this.props;

    const elem = React.Children.only(children);

    const result = copy(text, options);

    if (onCopy) {
      onCopy(text);
    }
    if (onSuccess && result) {
      onSuccess(text);
    }
    if (onFail && !result) {
      onFail(text);
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
      options: _options,
      children,
      ...props
    } = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, {...props, onClick: this.onClick});
  }
});
