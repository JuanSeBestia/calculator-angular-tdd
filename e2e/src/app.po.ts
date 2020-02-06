import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

  navigateToCalculator() {
    return browser.get('/tabs/tab2');
  }

  getButtonN7() {
    return element(by.cssContainingText('.number-button', '7'));
  }

  getButtonN2() {
    return element(by.cssContainingText('.number-button', '2'));
  }

  getPlusButton() {
    return element(by.cssContainingText('.number-button', '+'));
  }

  getDivideButton() {
    return element(by.cssContainingText('.number-button', '/'));
  }

  getEqualButton() {
    return element(by.cssContainingText('.inner-button', '='));
  }

  getDisplay() {
    return element(by.css('.displayValue'));
  }


}
