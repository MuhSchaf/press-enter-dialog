import { Component } from '@angular/core';
import { Dialog1Component } from './dialog1.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(public dialog: MatDialog) {}
    openDialog() : void {
      this.name = 'Muh'
      console.log("app openDialog");
      const dialogRef = this.dialog.open(Dialog1Component, {
        width: '250px',
        data: this.name
      });
  }
}
