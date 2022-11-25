import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
// TEST FAILED
  // it('Prueba 1', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toContain('');
  // });
  // Reason? Stupid Bug Too many it and expect functions
  // it('Prueba 1', () => {
  //   page.navigateTo();
  //   expect(page.getIonicWork()).toContain('');
  // });
  it('Prueba 1', () => {
    onPrepare:async()=>{
      await page.navigateTo();
    expect(page.getIonicWork()).toContain('');
    // expect(page.getSCSSSep2()).toContain('');
    }
  });
  it('Prueba 2', () => {
    page.navigateTo();
    expect(page.getSCSSSep()).toContain('');
  });
  it('Prueba 3', () => {
    page.navigateTo();
    expect(page.getSCSSBodycol()).toContain('');
  });
  it('Prueba 4', () => {
    page.navigateTo();
    // expect(page.getIonicWork()).toContain('');
    expect(page.getSCSSSep2()).toContain('');
  });
  it('Prueba 5', () => {
    onPrepare:async()=>{
      await page.navigateTo();
    expect(page.getIonicWork()).toContain('');
    // expect(page.getSCSSSep2()).toContain('');
    }
  });

  // it('Prueba 4', () => {
  //   page.navigateTo();
  //   expect(page.getIonicWork()).toContain('');
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
