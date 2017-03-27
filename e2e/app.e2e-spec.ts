import { GrowupPage } from './app.po';

describe('growup App', () => {
  let page: GrowupPage;

  beforeEach(() => {
    page = new GrowupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
