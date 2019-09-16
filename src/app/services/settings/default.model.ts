class DigramDefault {
    height: number;
    width: number;
    constructor(row: Object) {
        this.height = row['height'] || 600;
        this.width = row['width'] || 800;
    }
}

class NodeDefault {
    width: number;
    marginWidth: number;
    constructor(row: Object) {
        this.width = row['width'] || 80;
        this.marginWidth = row['marginWidth'] || 30;
    }
}

export class DefaultModel {
    diagram: DigramDefault;
    node: NodeDefault;
    constructor(row: Object) {
        this.diagram = new DigramDefault(row['diagram'] || {});
        this.node = new NodeDefault(row['node'] || {});
    }
}
