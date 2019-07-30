import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DiagramModule } from './components/diagram/diagram.module';

@NgModule({
    declarations: [
    AboutComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiagramModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
