import { SWPenguinPage } from './app.po';

describe('swpenguin App', function() {
  let page: SWPenguinPage;

  beforeEach(() => {
    page = new SWPenguinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
