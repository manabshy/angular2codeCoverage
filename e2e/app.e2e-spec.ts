import { Angular2CodeCoveragePage } from './app.po';

describe('angular2-code-coverage App', function() {
  let page: Angular2CodeCoveragePage;

  beforeEach(() => {
    page = new Angular2CodeCoveragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
