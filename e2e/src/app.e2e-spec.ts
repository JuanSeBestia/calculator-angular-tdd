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

  it('should perform an operation correctly', () => {
    page.navigateToCalculator();
    page.getButtonN7().click();
    page.getPlusButton().click();
    page.getButtonN2().click();
    page.getEqualButton().click();
    let result = page.getDisplay();
    expect(result.getText()).toEqual('9');
  });
});
