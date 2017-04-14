import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

function onClick(event, props) {
  const {
    text,
    onCopy,
    children,
    options
  } = props;
  const elem = React.Children.only(children);
  const result = copy(text, options);

  if (onCopy) {
    onCopy(text, result);
  }

  // Bypass onClick if it was present
  if (elem && elem.props && typeof elem.props.onClick === 'function') {
    elem.props.onClick(event);
  }
}

const CopyToClipboard = (props) => {
  const {
    text: _text,
    onCopy: _onCopy,
    options: _options,
    children,
    ...sanitizedProps
  } = props;
  const elem = React.Children.only(children);

  return React.cloneElement(elem, {
    ...sanitizedProps,
    onClick: event => onClick(event, props)
  });
};


CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onCopy: PropTypes.func,
  options: PropTypes.shape({
    debug: PropTypes.bool,
    message: PropTypes.string
  })
};

export default CopyToClipboard;
export {CopyToClipboard};

