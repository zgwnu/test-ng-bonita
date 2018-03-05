import { AppPage } from './app.po';

describe('test-ng-bonita App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('APP Startup', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ZGW NU Ng Bonita Test');
  });

  it('SERVER Authentication', () => {
    page.navigateTo();
    expect(page.getAuthenticationTestText()).toEqual('☺ Session');
  });

  it('API BPM Process', () => {
    page.navigateTo();
    expect(page.getBpmProcessTestTextArray()).toEqual([ 
      '☺ searchProcessDefinition', 
      '☺ getProcessDefinition', 
      '☺ createCase' 
    ]);
  });

});
