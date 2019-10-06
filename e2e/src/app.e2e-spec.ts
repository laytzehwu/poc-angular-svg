import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });
    
    it('should display about by default', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Prototype for SVG');
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'about');
        page.getNavLinks().then(items => {
            expect(items.length).toBe(2);
            expect(items[0].getText()).toBe('About');
            expect(items[1].getText()).toBe('Diagram');
        });
    });
    
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
