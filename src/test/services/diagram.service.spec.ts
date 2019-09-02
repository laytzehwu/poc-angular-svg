import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DiagramService } from '@services/diagrams';

describe('DiagramService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));
    it('should be created', () => {
        const service: DiagramService = TestBed.get(DiagramService);
        expect(service).toBeTruthy();
    });
});