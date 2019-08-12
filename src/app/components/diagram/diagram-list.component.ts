import { Component, OnInit } from '@angular/core';
import { DiagramService } from '@services/diagram.service';
import { Diagram } from '@services/diagram';

@Component({
  selector: 'app-diagram-list',
  templateUrl: './diagram-list.component.html',
  styleUrls: ['./diagram-list.component.scss']
})
export class DiagramListComponent implements OnInit {

    diagrams: Diagram[];

    constructor(private service: DiagramService) { }

    ngOnInit() {
        this.service.getAllDiagrams().subscribe(diagrams => {
            this.diagrams = diagrams;
        });
    }

}
