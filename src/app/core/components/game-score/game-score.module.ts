import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameScoreComponent } from './game-score.component';



@NgModule({
  declarations: [
    GameScoreComponent
  ],
  exports: [
    GameScoreComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class GameScoreModule { }
