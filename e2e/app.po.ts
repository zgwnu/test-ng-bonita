import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAuthenticationTestText() {
    return element(by.css('authentication-test div h3')).getText();
  }

  getBpmProcessTestTextArray() {
    return element.all(by.css('bpm-process-test div h3')).getText();
  }

}
