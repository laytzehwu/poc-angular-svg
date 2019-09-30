import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagramsSettingsService, SettingModels } from '@settings/index';
import { DiagramService, DiagramDetail } from '@services/diagrams';
import { DiagramSketch } from '@services/sketch';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

    id: number;
    diagram: DiagramDetail;
    settings: SettingModels;

    constructor(
        private route: ActivatedRoute,
        private settingService: DiagramsSettingsService,
        private service: DiagramService
    ) { 
    }

    ngOnInit() {
        
        this.route.paramMap.subscribe(params => {
            const diagramId: number = parseInt(params.get('id'));
            if (this.settings) {
                this.loadDiagram(diagramId);
            } else {
                this.settingService.loadSettings().subscribe(settings => {
                    this.settings = settings;
                    this.loadDiagram(diagramId);
                });
            }
          });
    }

    loadDiagram(id: number) {
        if (id && !isNaN(id)) {
            this.service.getDiagram(id).subscribe( d => {
                this.id = id;
                this.diagram = d;
            });
        }
    }

    get sketch() {
        return this.diagram && this.diagram.sketch ? this.diagram.sketch: {};
    }
}
