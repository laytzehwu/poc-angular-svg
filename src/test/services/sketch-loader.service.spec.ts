import { TestBed } from '@angular/core/testing';

import { SketchLoaderService, DiagramSketch, NodeSketch } from '@services/sketch';
import { DiagramDetail, DiagramNode, Edge } from '@services/diagrams';

describe('SketchLoaderService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SketchLoaderService = TestBed.get(SketchLoaderService);
        expect(service).toBeTruthy();
    });

    it('can determine diagram has sketch loaded', () => {
        const service: SketchLoaderService = TestBed.get(SketchLoaderService);
        let diagram: DiagramDetail;
        expect(service.isSketchLoaded(diagram)).toBeFalsy();
        diagram = new DiagramDetail({diagram: {}});
        expect(service.isSketchLoaded(diagram)).toBeFalsy();
        diagram.sketch = new DiagramSketch({});
        expect(service.isSketchLoaded(diagram)).toBeTruthy();
        // First node
        diagram.nodes = new Array<DiagramNode>();
        diagram.nodes.push(new DiagramNode({
            uuid: 'abc123'
        }));
        // No sketch for the first node
        expect(service.isSketchLoaded(diagram)).toBeFalsy();
        // Introduce sketch to the first node
        diagram.sketch.nodes.push(new NodeSketch({uuid: 'abc123'}));
        expect(service.isSketchLoaded(diagram)).toBeTruthy();
        // Second node
        diagram.nodes.push(new DiagramNode({
            uuid: 'def456'
        }));
        expect(service.isSketchLoaded(diagram)).toBeFalsy();
        diagram.sketch.nodes.push(new NodeSketch({uuid: 'def456'}));
        expect(service.isSketchLoaded(diagram)).toBeTruthy();

        // First edge
        diagram.edges = new Array<Edge>();
        diagram.edges.push(new Edge({
            start: 'abc123',
            end: 'def456'
        }));
        expect(service.isSketchLoaded(diagram)).toBeFalsy();
    });
});
