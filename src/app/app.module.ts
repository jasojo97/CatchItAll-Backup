import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {FormsModule} from '@angular/forms';
//import {routing} from "./app.routing"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule, FormsModule //,routing
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
