import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SketchRenderService } from '@services/sketch';

describe('SketchRenderService', () => {
    beforeEach(() => TestBed.configureTestingModule({imports: [
        HttpClientTestingModule
    ]}));

    beforeEach(() => {

    });

    it('should be created', () => {
        const service: SketchRenderService = TestBed.get(SketchRenderService);
        expect(service).toBeTruthy();
    });
});
