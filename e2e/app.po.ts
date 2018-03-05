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

  getBpmCaseTestTextArray() {
    return element.all(by.css('bpm-case-test div h3')).getText();
  }

  getBpmActivityTestTextArray() {
    return element.all(by.css('bpm-activity-test div h3')).getText();
  }

}
