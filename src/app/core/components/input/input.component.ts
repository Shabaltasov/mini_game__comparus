import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{
  @Input() textControl: FormControl = new FormControl();

  public resetControl(): void {
    this.textControl.reset('');
  }
}
