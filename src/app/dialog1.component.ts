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
  private canBeClosed = false;

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.keyCode === 13 &&  this.checkIfYouAreMeant()&& this.canBeClosed) {
      event.stopImmediatePropagation();
      this.onNoClick();
    }
  }
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
      this.name = data;
    }

  onNoClick(): void {
    console.log('close');
    this.dialogRef.close();
  }

  doNothing(): void {
    console.log('doNothing');
  }
  

  openDialog() : void {
    console.log("open");
    this.canBeClosed = true;
    const dialogRef = this.dialog.open(Dialog2Component, {
      width: '150px',
      data: 'Kuh'
    });
  }

  private checkIfYouAreMeant(): boolean {

    const length = document.getElementsByClassName('mat-dialog-title').length;
    const title = document.getElementsByClassName('mat-dialog-title')[length-1].innerHTML;
    return title === this.name;
  }
 }