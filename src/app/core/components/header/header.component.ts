import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() timeInterval: EventEmitter<number> = new EventEmitter<number>();

  public gameTimeControl: FormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  public startGame(): void {
    this.timeInterval.emit(this.gameTimeControl.value)
    this.gameTimeControl.reset('')
  }
}
