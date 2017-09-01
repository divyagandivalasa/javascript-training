describe('Testing the Constructor Functions', function() {
  it('should be instance of SearchComponent', function() {
    var obj =  new SearchComponent();
    expect(obj instanceof SearchComponent).toBeTruthy();
  });
  it('should be instance of Pagination', function() {
    var obj =  new Pagination();
    expect(obj instanceof Pagination).toBeTruthy();
  });
  it('should be instance of UiComponents', function() {
    var obj =  new UiComponents();
    expect(obj instanceof UiComponents).toBeTruthy();
  });
});