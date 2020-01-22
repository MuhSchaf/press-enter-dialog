import { Component, Input, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
		if (event.keyCode === 13)
			this.name = "entered";
      else if(event.code === 'ShiftLeft') {
        this.name = "shifted";
      }
	}

  @Input() name: string;

  
}
