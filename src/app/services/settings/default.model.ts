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
    height: number;
    marginWidth: number;
    marginHeight: number;
    constructor(row: Object) {
        this.width = row['width'] || 80;
        this.marginWidth = row['marginWidth'] || 30;
        this.height = row['height'] || 120;
        this.marginHeight = row['marginHeight'] || 45;
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
