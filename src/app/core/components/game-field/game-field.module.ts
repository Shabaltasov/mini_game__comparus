import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameFieldComponent} from './game-field.component';
import {GameScoreModule} from "../game-score/game-score.module";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    GameFieldComponent
  ],
  exports: [
    GameFieldComponent
  ],
  imports: [
    CommonModule,
    GameScoreModule,
    HeaderModule
  ]
})
export class GameFieldModule {
}
