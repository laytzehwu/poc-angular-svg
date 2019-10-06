import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    getNavLinks(): ElementArrayFinder {
        return element.all(by.css('app-root header nav a'));
    }
}
