import { MangoGridPage } from './app.po';

describe('mango-grid App', function() {
  let page: MangoGridPage;

  beforeEach(() => {
    page = new MangoGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
