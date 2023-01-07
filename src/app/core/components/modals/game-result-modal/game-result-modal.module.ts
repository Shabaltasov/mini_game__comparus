import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameResultModalComponent} from './game-result-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    GameResultModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    MatButtonModule
  ]
})
export class GameResultModalModule {
}
