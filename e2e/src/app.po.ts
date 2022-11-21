import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  // getTitleText(){
  //   return element(by.css('app-root h1')).getText();
  // }
  // async getTitleTexth2():Promise<string>{
  //   return element(by.css('app-root h2')).getText();
  // }
  
  // async getTitlePar():Promise<string>{
  //   return element(by.css('app-root .par')).getText();
  // }

}
