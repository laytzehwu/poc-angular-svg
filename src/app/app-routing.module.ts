import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const appRoutes : Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    }
];

@NgModule({
declarations: [],
imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
],
exports: [RouterModule]
})
export class AppRoutingModule { }
