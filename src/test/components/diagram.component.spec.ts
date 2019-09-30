import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DiagramComponent, DiagramListComponent } from '@components/diagram';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'test/activated-route-stub';
import { DiagramsSettingsService, SettingModels } from '@services/settings';
import { DiagramService, DiagramDetail } from '@services/diagrams';

describe('DiagramComponent', () => {
    let component: DiagramComponent;
    let fixture: ComponentFixture<DiagramComponent>;
    let activatedRoute: ActivatedRouteStub;
    beforeEach(async(() => {
        activatedRoute = new ActivatedRouteStub({id: 123});
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                DiagramComponent,
                DiagramListComponent
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: activatedRoute
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiagramComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should be abled to create', () => {
        expect(component).toBeTruthy();
    });

    it('does not load diagram first created', () => {
        expect(component.id).toBeUndefined();
        expect(component.diagram).toBeUndefined();
        expect(component.settings).toBeUndefined();
    });

    it('can call endpoint to load settings', () => {
        expect(component.settings).toBeUndefined();
        const settingsServ: DiagramsSettingsService = TestBed.get(DiagramsSettingsService);
        const mockSettings: SettingModels = new SettingModels({});
        spyOn(settingsServ, 'loadSettings').and.returnValue(of(mockSettings));
        fixture.detectChanges();
        expect(settingsServ.loadSettings).toHaveBeenCalled();
        fixture.whenStable().then(() => {
            expect(component.settings).not.toBeUndefined();
            expect(component.settings).toBe(mockSettings);
        });
        
    });

    it('ensure diagram id get from route param', () => {
        const settingsServ: DiagramsSettingsService = TestBed.get(DiagramsSettingsService);
        spyOn(settingsServ, 'loadSettings').and.returnValue(of(new SettingModels({})));
        const diagramServ: DiagramService = TestBed.get(DiagramService);
        const mockDiagram: DiagramDetail = new DiagramDetail({
            id: 456,
            diagram: {}
        });
        spyOn(diagramServ, 'getDiagram').and.returnValue(of(mockDiagram));
        activatedRoute.setParamMap({id: 456});
        fixture.detectChanges();
        expect(diagramServ.getDiagram).toHaveBeenCalledWith(456);
        fixture.whenStable().then(() => {
            expect(component.id).toBe(456);
            expect(component.diagram).toBe(mockDiagram);
        });
        
    });
});