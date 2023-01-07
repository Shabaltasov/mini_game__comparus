import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-game-result-modal',
  templateUrl: './game-result-modal.component.html',
  styleUrls: ['./game-result-modal.component.scss']
})
export class GameResultModalComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public winner: string,
    private dialogRef: MatDialogRef<GameResultModalComponent>
  ) {
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
