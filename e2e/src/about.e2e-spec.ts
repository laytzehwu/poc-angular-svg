import { AboutPage } from "./about.po";
import { browser, logging, by } from 'protractor';

describe('About page', () => {
    let page: AboutPage;

    beforeEach(() => {
        page = new AboutPage();
    });

    it('should show its page', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Prototype for SVG');
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'about');
        page.getNavLinks().then(items => {
            expect(items.length).toBe(2);
            expect(items[0].getText()).toBe('About');
            expect(items[1].getText()).toBe('Diagram');
        });
    });

    it('forward to diagram pages', () => {
        page.navigateTo();
        page.getDiagramLink().click().then(() => {
            expect(
                browser.findElement(by.css('app-diagram-list h2')).getText()
            ).toBe('Available diagrams');
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
