import { TestBed } from '@angular/core/testing';
import { SketchRenderService } from '@services/sketch';

describe('SketchRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SketchRenderService = TestBed.get(SketchRenderService);
    expect(service).toBeTruthy();
  });
});
