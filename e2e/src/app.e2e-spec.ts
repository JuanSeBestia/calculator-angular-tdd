import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Calculator Jess & Juanse');
  });

  it('should perform an operation correctly at 7+2=9', () => {
    page.navigateToCalculator();
    page.getButtonN7().click();
    page.getPlusButton().click();
    page.getButtonN2().click();
    page.getEqualButton().click();
    let result = page.getDisplay();
    expect(result.getText()).toEqual('9');
  });

  it('should display \'Syntax Error\' at /+2=9', () => {
    page.navigateToCalculator();
    page.getDivideButton().click();
    page.getPlusButton().click();
    page.getButtonN2().click();
    page.getEqualButton().click();
    let result = page.getDisplay();
    expect(result.getText()).toEqual('Syntax Error');
  });
});
