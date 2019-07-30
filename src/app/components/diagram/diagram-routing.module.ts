import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramComponent } from './diagram.component';
import { DiagramListComponent } from './diagram-list.component';


const routes: Routes = [
    {
        path: 'diagram',
        component: DiagramListComponent
    },
    {
        path: 'diagram/:id',
        component: DiagramComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagramRoutingModule { }
