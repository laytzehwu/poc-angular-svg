import { Injectable } from '@angular/core';
import { DiagramDetail } from '@services/diagrams';
import { DiagramsSettingsService, DefaultModel } from '@services/settings';
import { DiagramSketch, NodeSketch } from './sketch';

@Injectable({
  providedIn: 'root'
})
export class SketchRenderService {

    constructor(private settingService: DiagramsSettingsService) { }

    renderDiagram(diagram: DiagramDetail) {
        const settings: DefaultModel = this.settingService.settings.default;
        const diagramSketch: DiagramSketch = new DiagramSketch({
            width: settings.diagram.width,
            height: settings.diagram.height
        });
        let iX = settings.node.marginWidth;
        let iY = settings.node.marginHeight;
        diagramSketch.nodes = diagram.nodes.map(node => {
            const sketch = new NodeSketch({
                uuid: node.uuid,
                x: iX,
                y: iY,
                width: settings.node.width,
                height: settings.node.height
            });
            iX += settings.node.width;
            iX += 2 * settings.node.marginWidth;
            if (iX > (settings.diagram.width - settings.node.width)) {
                iX = settings.node.marginWidth;
                iY += settings.node.marginHeight;
                iY += settings.node.height;
            }
            return sketch;
        });
        diagram.sketch = diagramSketch;
    }
}
