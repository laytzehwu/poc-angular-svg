import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DiagramComponent, DiagramListComponent } from '@components/diagram';

describe('DiagramComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                DiagramComponent,
                DiagramListComponent
            ]
        }).compileComponents();
    }));

    it('should be abled to create', () => {
        const fixture = TestBed.createComponent(DiagramComponent);
        const componet = fixture.debugElement.componentInstance;
        expect(componet).toBeTruthy();
    });
});