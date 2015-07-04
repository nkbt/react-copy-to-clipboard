describe('CopyToClipboard', () => {
  const CopyToClipboardInjector = require('inject!../src/CopyToClipboard');
  let copy, CopyToClipboard;


  beforeEach(() => {
    copy = jasmine.createSpy('copy-to-clipboard');
  });


  beforeEach(() => CopyToClipboard = CopyToClipboardInjector({
    'copy-to-clipboard': copy
  }));


  it('should be ok', () => {
    expect(CopyToClipboard).toBeTruthy();
  });
});
