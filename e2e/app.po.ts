import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAuthenticationSessionInfo() {
    return element(by.css('authentication-test div h3')).getText();
  }
}
