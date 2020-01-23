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
      console.log('dialog 2 ' + this.checkIfYouAreMeant());

    if (event.keyCode === 13 &&  this.checkIfYouAreMeant()) {

      console.log('dialog 2 ' + this.checkIfYouAreMeant());

      event.stopImmediatePropagation();
      this.onNoClick();
    }
  }
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
      this.name = data;
    }

  onNoClick(): void {
    console.log("dialog 2 clicked");
    this.dialogRef.close();
  }

  doNothing(): void {}

  private checkIfYouAreMeant(): boolean {

    const length = document.getElementsByClassName('mat-dialog-title').length;
    const title = document.getElementsByClassName('mat-dialog-title')[length-1].innerHTML;
    console.log('title ' + title + ' name ' + this.name);
    return title === this.name;
  }
}