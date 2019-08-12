import { Injectable } from '@angular/core';
import { DiagramDetail, INode } from './diagram';

@Injectable({
    providedIn: 'root'
})
export class DiagramMapper {
    
    findNodeFromDiagram(diagram: DiagramDetail, uuid: string): INode {
        let matchedNode: INode;
        matchedNode = diagram.nodes.find(node => node.uuid == uuid);
        if (matchedNode) {
            return matchedNode;
        }
        matchedNode = [].concat(
            ...diagram.nodes.filter(node => node.boxedNodes).map(node => node.boxedNodes)
        ).find(node => node.uuid == uuid);
        return matchedNode;
    }

    mappEdgesNodes(diagram: DiagramDetail) {
        diagram.edges.forEach(edge => {
            let matchedNode: INode;
            
            matchedNode = this.findNodeFromDiagram(diagram, edge.startUuid);
            if (matchedNode) {
                edge.startNode = matchedNode;
            } else {
                throw Error('Edge does not find its start node.');
            }

            matchedNode = this.findNodeFromDiagram(diagram, edge.endUuid);
            if (matchedNode) {
                edge.endNode = matchedNode;
            } else {
                throw Error('Edge does not find its end node.');
            }
        });
    }
    
    mappDiagram(diagram: DiagramDetail) {
        this.mappEdgesNodes(diagram);
    }
}