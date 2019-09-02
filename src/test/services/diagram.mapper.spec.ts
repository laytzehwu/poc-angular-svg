import { TestBed, async } from '@angular/core/testing';
import { DiagramMapper } from '@services/diagrams/diagram.mapper';
import { DiagramDetail, INode } from '@services/diagrams';
import { SketchLoaderService, SketchRenderService } from '@services/sketch';
describe('DiagramMapper', () => {
    let service: DiagramMapper;
    let sketchLoader: SketchLoaderService;
    let render: SketchRenderService;

    beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => {
        sketchLoader = TestBed.get(SketchLoaderService);
        render = TestBed.get(SketchRenderService);
        service = new DiagramMapper(sketchLoader, render);
    });

    it('can be created', () => {
        expect(service).not.toBeUndefined();
    });

    it('has no error when find node from empty DigramDetail', () => {
        let matchedNode: INode = service.findNodeFromDiagram(
            new DiagramDetail({diagram:{}}), 'abc123');
        expect(matchedNode).toBeUndefined();    

    });

    it('can find node from Diagram sub nodes', () => {
        const testNode: DiagramDetail = new DiagramDetail({
            diagram:{
                nodes: [{
                    id: 1,
                    uuid: 'abc123'
                },{
                    id: 2,
                    uuid: 'def456'
                }]
            }
        });
        let matchedNode: INode = service.findNodeFromDiagram(
            testNode, 'abc123');
        expect(matchedNode).not.toBeUndefined();    
        expect(matchedNode.id).toEqual(1);
        expect(matchedNode.uuid).toEqual('abc123');
        matchedNode = service.findNodeFromDiagram(
            testNode, 'def456');
        expect(matchedNode).not.toBeUndefined();    
        expect(matchedNode.id).toEqual(2);
        expect(matchedNode.uuid).toEqual('def456');
        matchedNode = service.findNodeFromDiagram(
            testNode, 'ghi789');
        expect(matchedNode).toBeUndefined();
    });

    it('can find node from boxed nodes', () => {
        const testNode: DiagramDetail = new DiagramDetail({
            diagram:{
                nodes: [{
                    id: 1,
                    uuid: 'abc123',
                    boxedNodes: [{
                        id: 3,
                        uuid: 'ghi789',
    
                    }]
                },{
                    id: 2,
                    uuid: 'def456'
                }]
            }
        });
        let matchedNode: INode = service.findNodeFromDiagram(
            testNode, 'ghi789');
        expect(matchedNode).not.toBeUndefined();    
        expect(matchedNode.id).toEqual(3);
        expect(matchedNode.uuid).toEqual('ghi789');
    });

    it('can matched edge', () => {
        const testNode: DiagramDetail = new DiagramDetail({
            diagram:{
                nodes: [{
                    id: 1,
                    uuid: 'abc123',
                    boxedNodes: [{
                        id: 3,
                        uuid: 'ghi789',
    
                    }]
                },{
                    id: 2,
                    uuid: 'def456'
                }],
                edges: [{
                    start: 'ghi789',
                    end: 'def456'
                }]
            }
        });
        expect(testNode.edges).not.toBeUndefined();
        expect(testNode.edges.length).toEqual(1);
        const testEdge = testNode.edges[0];
        expect(testEdge).not.toBeUndefined();
        expect(testEdge.startNode).toBeUndefined();
        expect(testEdge.endNode).toBeUndefined();
        service.mappEdgesNodes(testNode);
        expect(testEdge.startNode).toEqual(service.findNodeFromDiagram(testNode, 'ghi789'));
        expect(testEdge.endNode).toEqual(service.findNodeFromDiagram(testNode, 'def456'));
    });

    it('call renderer when sketch is not loaded', () => {
        const testDiagram: DiagramDetail = new DiagramDetail({diagram: {
            nodes: [{
                id: 1,
                uuid: 'abc123',
                boxedNodes: [{
                    id: 3,
                    uuid: 'ghi789',
    
                }]
            }]
        }});

        spyOn(sketchLoader, 'isSketchLoaded').and.returnValue(false);
        spyOn(render, 'renderDiagram');
        service.mappDiagram(testDiagram);
        expect(sketchLoader.isSketchLoaded).toHaveBeenCalled();
        expect(render.renderDiagram).toHaveBeenCalledWith(testDiagram);
    });
});