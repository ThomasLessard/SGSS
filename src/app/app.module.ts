import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
