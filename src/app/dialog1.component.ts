import { Component, Input, Inject, HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog2Component } from './dialog2.component';

@Component({
  selector: 'dialog1',
  templateUrl: './dialog1.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class Dialog1Component {

  @Input() name: string;

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.keyCode === 13 &&  this.checkIfYouAreMeant()) {
      event.stopImmediatePropagation();
      this.onNoClick();
    }
  }
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
      console.log("dialog 1 " + data);
      this.name = data;
    }

  onNoClick(): void {
    console.log("dialog 1 clicked");
    this.dialogRef.close();
  }

  doNothing(): void {

  }
  

  openDialog() : void {
    console.log("dialog 1 openDialog");
    const dialogRef = this.dialog.open(Dialog2Component, {
      width: '150px',
      data: 'Kuh'
    });
  }

  private checkIfYouAreMeant(): boolean {

    const length = document.getElementsByClassName('mat-dialog-title').length;
    const title = document.getElementsByClassName('mat-dialog-title')[length-1].innerHTML;
    console.log('title ' + title + ' name ' + this.name);
    return title === this.name;
  }
 }