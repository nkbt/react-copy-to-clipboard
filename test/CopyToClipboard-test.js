import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';


describe('CopyToClipboard', () => {
  const CopyToClipboardInjector = require('inject!../src/CopyToClipboard');
  let copy, CopyToClipboard, onCopy;


  beforeEach(() => {
    copy = jasmine.createSpy('copy-to-clipboard');
    onCopy = jasmine.createSpy('onCopy');
  });


  beforeEach(() => CopyToClipboard = CopyToClipboardInjector({
    'copy-to-clipboard': copy
  }));

  beforeEach(() => {
  });


  const create = (children, text = 'test') =>
    TestUtils.renderIntoDocument(<CopyToClipboard
      text={text} onCopy={onCopy} children={children} />);


  it('should be ok', () => {
    expect(CopyToClipboard).toBeTruthy();
  });


  it('should require a single child to be present', () => {
    expect(create).toThrow();
  });


  it('should copy on click on child element', () => {
    const span = React.findDOMNode(create(<span>test</span>));

    TestUtils.Simulate.click(span);

    expect(copy).toHaveBeenCalled();
  });


  it('should copy with specified text', () => {
    const span = React.findDOMNode(create(<span>test</span>, 'hello'));

    TestUtils.Simulate.click(span);

    expect(copy).toHaveBeenCalledWith('hello');
  });


  it('should call onCopy callback', () => {
    const span = React.findDOMNode(create(<span>test</span>, 'hello'));

    TestUtils.Simulate.click(span);

    expect(onCopy).toHaveBeenCalledWith('hello');
  });


  it('should be ok if no onCopy callback specified', () => {
    const span = React.findDOMNode(TestUtils
      .renderIntoDocument(<CopyToClipboard text="ok"><span>test</span></CopyToClipboard>));

    expect(TestUtils.Simulate.click.bind(null, span)).not.toThrow();
  });
});
