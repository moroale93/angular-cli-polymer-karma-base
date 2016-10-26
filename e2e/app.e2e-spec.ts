import { ProgettoTestCliPage } from './app.po';

describe('progetto-test-cli App', function() {
  let page: ProgettoTestCliPage;

  beforeEach(() => {
    page = new ProgettoTestCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
