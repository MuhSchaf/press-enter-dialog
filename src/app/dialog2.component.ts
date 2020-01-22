import { Component, Input, Inject, HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'dialog2',
  templateUrl: './dialog2.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class Dialog2Component {

  @Input() name: string;

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.stopImmediatePropagation();
      this.onNoClick();
    }
  }
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) data: string) {}

  onNoClick(): void {
    console.log("dialog 2 clicked");
    this.dialogRef.close();
  }

    doNothing(): void {
    
  }
 }