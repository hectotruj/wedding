import { WeddingPage } from './app.po';

describe('wedding App', () => {
  let page: WeddingPage;

  beforeEach(() => {
    page = new WeddingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
