import { DiagramDetail, Edge } from "@services/diagrams";

describe('DiagramDetail', () => {

    it('ensure input is correct!', () => {
        try {
            new DiagramDetail({});
            fail('Error does not raise when DigramDetail call with empty');
        } catch(e) {
            expect(e.message).toContain('Missing diagram');
        }
    });

    it('can load its nodes', () => {
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
        expect(testNode.nodes.length).toEqual(2);
        expect(testNode.nodes[0].id).toEqual(1);
        expect(testNode.nodes[0].uuid).toEqual('abc123');
        expect(testNode.nodes[1].id).toEqual(2);
        expect(testNode.nodes[1].uuid).toEqual('def456');
    });

    it('can load its edges', () => {
        const testNode: DiagramDetail = new DiagramDetail({
            diagram: {
                edges: [{
                    id: 123,
                    start: 'abc123',
                    end: 'def456'
                }]
            }
        });
        expect(testNode.edges.length).toEqual(1);
        const testEdge: Edge = testNode.edges[0];
        expect(testEdge).not.toBeUndefined();
        expect(testEdge.id).toEqual(123);
        expect(testEdge.startUuid).toEqual('abc123');
        expect(testEdge.endUuid).toEqual('def456');
    });

});