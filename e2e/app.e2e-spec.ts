import { Angular2materialPage } from './app.po';

describe('angular2material App', function() {
  let page: Angular2materialPage;

  beforeEach(() => {
    page = new Angular2materialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
