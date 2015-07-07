describe('Component', () => {
  const ComponentInjector = require('inject!../src/Component');
  let mock, Component;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => Component = ComponentInjector({
    mock
  }));


  it('should be ok', () => {
    expect(Component).toBeTruthy();
  });
});
