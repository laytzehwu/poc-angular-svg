import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

    id: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { 
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadDiagram(parseInt(params.get('id')));
          });
    }

    loadDiagram(id: number) {
        // TODO: make a rest call a return diagram module here
        this.id = id;
    }

}
