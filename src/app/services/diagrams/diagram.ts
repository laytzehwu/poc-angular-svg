export class Diagram {
    id: number;
    name: string;
    constructor(row: any) {
        this.id = row.id;
        this.name = row.name;
    }
}

export interface INode {
    id: number;
    uuid: string;
    type: string;
    name: string;
}

export class Edge {
    id: number;
    startUuid: string;
    endUuid: string;
    startNode: INode;
    endNode: INode;
    constructor(row: any) {
        this.id = row.id;
        this.startUuid = row.start;
        this.endUuid = row.end;
    }
}

export class Node {
    id: number;
    uuid: string;
    type: string;
    name: string;
    constructor(row: any) {
        this.id = row.id;
        this.type = row.type;
        this.name = row.name;
        this.uuid = row.uuid;
    }
}

export class BoxedNode extends Node implements INode {
    isInput: boolean;
    isOutput: boolean;
    constructor(row: any) {
        super(row);
        this.isInput = row.isInput;
        this.isOutput = row.isOutput;
    }
}

export class DiagramNode extends Node implements INode {
    boxedNodes: BoxedNode[];
    constructor(row: any) {
        super(row);
        if (row.boxedNodes) {
            this.boxedNodes = row.boxedNodes.map(n => new BoxedNode(n));
        }
    }
}

export class DiagramDetail extends Diagram {
    edges: Edge[];
    nodes: DiagramNode[];
    constructor(row: any) {
        super(row);
        if (row.diagram.edges) {
            this.edges = row.diagram.edges.map(source => new Edge(source));
        }
        if(row.diagram.nodes) {
            this.nodes = row.diagram.nodes.map(source => new DiagramNode(source));
        }
    }
}