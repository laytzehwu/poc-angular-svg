class BasicSketch {
    protected _uuid: string;

    constructor(row: any) {
        this._uuid = row.uuid;
    }

    get uuid(): string {
        return this._uuid;
    }

}

export class NodeSketch extends BasicSketch {
    constructor(row: any) {
        super(row);
    }
}

export class EdgeSketch extends BasicSketch {
    startUuid: string;
    endUuid: string;
    constructor(row: any) {
        super(row);
        this.startUuid = row.start;
        this.endUuid = row.end;
    }
}

export class DiagramSketch {
    nodes: Array<NodeSketch>;
    edges: Array<EdgeSketch>;
    constructor(row: any) {
        this.nodes = row.nodes ? row.nodes.map(nodeRow => new NodeSketch(nodeRow)):[];
        this.edges = row.edges ? row.edges.map(edgeRow => new EdgeSketch(edgeRow)):[];
    }
}