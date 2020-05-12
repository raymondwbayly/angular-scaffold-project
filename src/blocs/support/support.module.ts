import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SupportRoutingModule } from './support-routing.module';
import { SupportBlocComponent } from './support.component';

@NgModule({
  declarations: [
    SupportBlocComponent
  ],
  imports: [
    BrowserModule,
    SupportRoutingModule
  ],
  providers: [],
  bootstrap: [SupportBlocComponent]
})
export class AppModule { }
