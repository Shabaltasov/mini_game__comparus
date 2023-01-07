import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() buttonColor = 'primary';
  @Input() buttonText = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
