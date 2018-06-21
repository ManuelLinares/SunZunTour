import { SunZunTourPage } from './app.po';

describe('sun-zun-tour App', () => {
  let page: SunZunTourPage;

  beforeEach(() => {
    page = new SunZunTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
