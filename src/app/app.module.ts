import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MoonPhaseComponent } from './moon-phase/moon-phase.component';
import { MoonResultsComponent } from './moon-results/moon-results.component';



@NgModule({
  declarations: [
    AppComponent,
    MoonPhaseComponent,
    MoonResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
