import { Injectable } from '@angular/core';
import { DiagramDetail } from '@services/diagrams';
import { DiagramsSettingsService } from '@services/settings';

@Injectable({
  providedIn: 'root'
})
export class SketchRenderService {

    constructor(private settingService: DiagramsSettingsService) { }

    renderDiagram(diagram: DiagramDetail) {
        
    }
}
