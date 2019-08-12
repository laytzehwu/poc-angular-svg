import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DiagramsSettingsService } from '@settings/diagrams.settings.service';
import { IDiagramSettings } from '@settings/IDiagramSettings';
import { DiagramService } from '@services/diagram.service';
import { DiagramDetail } from '@services/diagram';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

    id: number;
    settings: IDiagramSettings;
    diagram: DiagramDetail;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private settingService: DiagramsSettingsService,
        private service: DiagramService
    ) { 
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const diagramId: number = parseInt(params.get('id'));
            this.settingService.getSettings().subscribe(settings => {
                this.settings = settings;
                this.loadDiagram(diagramId);
            });
          });
    }

    loadDiagram(id: number) {
        this.service.getDiagram(id).subscribe( d => {
            this.id = id;
            this.diagram = d;
            console.log(this.diagram);
        });
    }

}
