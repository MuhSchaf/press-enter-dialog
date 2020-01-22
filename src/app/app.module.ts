import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DemoMaterialModule} from './material-module';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Dialog1Component } from "./dialog1.component";
import { Dialog2Component } from "./dialog2.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [Dialog1Component, Dialog2Component],
  declarations: [AppComponent, HelloComponent, Dialog1Component, Dialog2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
