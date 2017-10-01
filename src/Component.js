import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';


export class CopyToClipboard extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClickCapture: PropTypes.func,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func,
    options: PropTypes.shape({
      debug: PropTypes.bool,
      message: PropTypes.string
    })
  };


  static defaultProps = {
    onCopy: undefined,
    options: undefined
  };


  onClick = event => {
    const {
      text,
      onCopy,
      children,
      options
    } = this.props;

    const result = copy(text, options);

    if (onCopy) {
      onCopy(text, result);
    }

    // Bypass onClick if it was present
    if (children && children.props && typeof children.props.onClick === 'function') {
      children.props.onClick(event);
    }
  };


  render() {
    const {
      text: _text,
      onCopy: _onCopy,
      options: _options,
      onClickCapture: _onClickCapture,
      children,
      ...restProps
    } = this.props;

    return React.cloneElement(children, {...restProps, onClick: this.onClick});
  }
}
