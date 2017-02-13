import { Angularfire2presPage } from './app.po';

describe('angularfire2pres App', function() {
  let page: Angularfire2presPage;

  beforeEach(() => {
    page = new Angularfire2presPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
