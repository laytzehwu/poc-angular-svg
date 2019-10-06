import { browser } from 'protractor';
import { AppPage } from './app.po';

export class AboutPage extends AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl + 'about') as Promise<any>;
    }

    getDiagramLink() {
        return this.getNavLinks().filter(elem => {
            return elem.getText().then(text => text == 'Diagram');
        }).first();
    }

}