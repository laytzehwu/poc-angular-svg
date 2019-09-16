import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagramsSettingsService } from '@settings/diagrams.settings.service';
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

    constructor(
        private route: ActivatedRoute,
        private settingService: DiagramsSettingsService,
        private service: DiagramService
    ) { 
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const diagramId: number = parseInt(params.get('id'));
            this.settingService.loadSettings().subscribe(settings => {
                this.loadDiagram(diagramId);
            });
          });
    }

    loadDiagram(id: number) {
        this.service.getDiagram(id).subscribe( d => {
            this.id = id;
            this.diagram = d;
            console.log('Diagram to component', this.diagram);
        });
    }

    get sketch() {
        return this.diagram ? this.diagram.sketch: {};
    }
}
