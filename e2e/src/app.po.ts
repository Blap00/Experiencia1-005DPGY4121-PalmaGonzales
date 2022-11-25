import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getIonicWork() {
    return element(by.css('app-root')).getText();
  }

  getSCSSSep2(){
    return element(by.css('app-root .sep2')).getText();
  }
  getSCSSSep(){
    return element(by.css('app-root .sep2')).getText();
  }
  getSCSSBodycol(){
    return element(by.css('app-root .bodycol')).getText();
  }
  
  // async getTitleTexth2():Promise<string>{
  //   return element(by.css('app-root h2')).getText();
  // }
  
  // async getTitlePar():Promise<string>{
  //   return element(by.css('app-root .par')).getText();
  // }

}
