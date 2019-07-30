import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { DiagramComponent } from './diagram.component';
import { DiagramRoutingModule } from './diagram-routing.module';
import { DiagramListComponent } from './diagram-list.component';


@NgModule({
    declarations: [
        DiagramComponent,
        DiagramListComponent
    ],
    imports: [
        CommonModule,
        DiagramRoutingModule
    ]
})
export class DiagramModule { }
