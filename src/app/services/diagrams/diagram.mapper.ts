import { Injectable } from '@angular/core';
import { DiagramDetail, INode } from './diagram';

@Injectable({
    providedIn: 'root'
})
export class DiagramMapper {
    

    private findMatchedUuidNode(nodes: Array<INode>, uuid: string): INode {
        return nodes.find(node => node.uuid == uuid);
    }

    findNodeFromDiagram(diagram: DiagramDetail, uuid: string): INode {
        let matchedNode: INode;
        if (diagram.nodes) {
            let nodes: Array<INode> = diagram.nodes;
            matchedNode = this.findMatchedUuidNode(nodes, uuid);
            if (matchedNode) {
                return matchedNode;
            }
            nodes = [].concat(
                ...diagram.nodes.filter(node => node.boxedNodes).map(node => node.boxedNodes)
            );
            matchedNode = this.findMatchedUuidNode(nodes, uuid);
        }
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