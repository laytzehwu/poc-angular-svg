import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { AboutComponent } from '@components/about';
import { AppRoutingModule } from './app-routing.module';
import { DiagramModule } from '@components/diagram';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        DiagramModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
