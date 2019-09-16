import { DiagramsSettingsService } from '@services/settings';

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
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(row: any) {
        super(row);
        this.x = row.x || 0;
        this.y = row.y || 0;
        this.width = row.width || 100;
        this.height = row.height || 100;
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
    width: number;
    height: number;
    nodes: Array<NodeSketch>;
    edges: Array<EdgeSketch>;
    constructor(row: any) {
        this.width = row.width;
        this.height = row.height;
        this.nodes = row.nodes ? row.nodes.map(nodeRow => new NodeSketch(nodeRow)):[];
        this.edges = row.edges ? row.edges.map(edgeRow => new EdgeSketch(edgeRow)):[];
    }
}