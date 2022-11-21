import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('Prueba 1', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  // });
  // it('Prueba 2', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toContain('Bienvenido a Protractor');
  // });
  // // it('Prueba 3', async() => {
  // //   await(page.navigateTo());
  // //   expect(await page.getTitleTexth2()).toEqual('Hola Mundo');
    
  // // });
  // //otra
  // it('Prueba 3', async() => {
  //   onPrepare:async()=>{
  //   await page.navigateTo();
  //   expect(await page.getTitleTexth2()).toEqual('Hola Mundo');
  //   }
  // });
  // //a
  // it('Prueba 4', async() => {
  //   onPrepare:async()=>{
  //   await page.navigateTo();
  //   expect(await page.getTitleTexth2()).toEqual('Hola como estas??');
  //   }
  // });

});
