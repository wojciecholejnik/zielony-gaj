import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarberiaAboutComponent } from './barberia-about/barberia-about.component';
import { MsStudioAboutComponent } from './ms-studio-about/ms-studio-about.component';

@NgModule({
  declarations: [
    AppComponent,
    BarberiaAboutComponent,
    MsStudioAboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
