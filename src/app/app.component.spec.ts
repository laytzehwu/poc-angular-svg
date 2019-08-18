import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([
                { path: 'about', component: AboutComponent }
            ])
        ],
        declarations: [
            AppComponent, AboutComponent
        ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Ah Lay Diagram'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Ah Lay Diagram');
    });

    it(`should contain navigation bar contain 'about' and diagram`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(
            compiled.querySelector('a[routerLink="/about"]')
            .textContent).toContain('About');
        expect(
            compiled.querySelector('a[routerLink="/diagram"]')
            .textContent).toContain('Diagram');
    });

    it(`should show 'Thank you' in footer`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('footer').textContent).toContain('Thank you');
    });

    it('should render router-outlet in section', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(
            compiled.querySelector('section')
            .getElementsByTagName('router-outlet').length).toEqual(1);
    });
});
