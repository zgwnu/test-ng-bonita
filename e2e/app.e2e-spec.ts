import { AppPage } from './app.po';

describe('test-ng-bonita App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ZGW NU Ng Bonita Test');
  });

  it('should display session info', () => {
    page.navigateTo();
    expect(page.getAuthenticationSessionInfo()).toEqual('☺ Session');
  });

});
