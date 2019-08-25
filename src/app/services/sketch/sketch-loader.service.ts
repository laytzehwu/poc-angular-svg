import { Injectable } from '@angular/core';
import { DiagramDetail, DiagramNode, Edge } from '@services/diagrams';
import { NodeSketch, EdgeSketch } from './sketch';

@Injectable({
    providedIn: 'root'
})
export class SketchLoaderService {

    constructor() { }

    getDiagramNodeSketch(diagram: DiagramDetail, node: DiagramNode): NodeSketch {
        if (!diagram.sketch) {
            return undefined;
        }
        const diagramSketch = diagram.sketch;
        if (!diagramSketch) {
            return undefined;
        }
        return diagramSketch.nodes.find(nodeSketch => node.uuid === nodeSketch.uuid);
    }

    getDiagramEdgeSketch(diagram: DiagramDetail, edge: Edge): EdgeSketch {
        if (!diagram.sketch) {
            return undefined;
        }
        const diagramSketch = diagram.sketch;
        if (!diagramSketch) {
            return undefined;
        }
        return diagramSketch.edges.find(
            edgeSketch => (edge.startUuid == edgeSketch.startUuid &&
            edge.endUuid == edgeSketch.endUuid)
        );
    }

    isSketchLoaded(diagram: DiagramDetail): boolean {
        if (!diagram) {
            return false;
        }
        if (!diagram.sketch) {
            return false;
        }

        if (diagram.nodes && diagram.nodes.length > 0) {
            const unsketchNode = diagram.nodes.find(
                node => !(this.getDiagramNodeSketch(diagram, node)));
            if (unsketchNode) {
                return false;
            }
        }

        if (diagram.edges && diagram.edges.length > 0) {
            const unsketchEdge = diagram.edges.find(
                edge => !(this.getDiagramEdgeSketch(diagram, edge)));
                if (unsketchEdge) {
                    return false;
                }
        }

        return true;
    }
}
