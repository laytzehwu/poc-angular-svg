export class Diagram {
    id: number;
    name: string;
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
    }
}

export class Edge {
    id: number;
    startNode: number;
    endNode: number;
    constructor(row) {
        this.id = row.id;
        this.startNode = row.startNode;
        this.endNode = row.endNode;
    }
}

export class Node {
    id: number;
    type: string;
    name: string;
    constructor(row) {
        this.id = row.id;
        this.type = row.type;
        this.name = row.name;
    }
}

export class BoxedNode extends Node {
    isInput: boolean;
    isOutput: boolean;
    constructor(row) {
        super(row);
        this.isInput = row.isInput;
        this.isOutput = row.isOutput;
    }
}

export class DiagramNode extends Node {
    boxedNodes: BoxedNode[];
    constructor(row) {
        super(row);
        if (row.boxedNodes) {
            this.boxedNodes = row.boxedNodes.map(n => new BoxedNode(n));
        }
    }
}

export class DiagramDetail extends Diagram {
    edges: Edge[];
    nodes: DiagramNode[];
    constructor(row) {
        super(row);
        if (row.diagram.edges) {
            this.edges = row.diagram.edges.map(source => new Edge(source));
        }
        if(row.diagram.nodes) {
            this.nodes = row.diagram.nodes.map(source => new DiagramNode(source));
        }
    }
}