import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IGameBlocks} from "../../interfaces/game-blocks";
import {interval, Subscription} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {GameResultModalComponent} from "../modals/game-result-modal/game-result-modal.component";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {
  public blocks: IGameBlocks[] = [];
  public userScore!: number;
  public pcScore!: number;
  public gameTimeSubscription!: Subscription | null;
  public selectedBlock!: number;
  public gameOver = false;
  private gameTime!: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.gameTime = 1000;
    this.initGameBlocks();
  }

  public startGame(gameTime: number): void {
    this.userScore = 0;
    this.pcScore = 0;
    if (this.gameOver) {
      this.initGameBlocks();
    }
    if(!gameTime) {
    gameTime = this.gameTime;
    }
    let prevIdx = this.selectedBlock;
    if (!this.gameTimeSubscription) {
      this.gameTimeSubscription = interval(gameTime).subscribe(() => {
        this.selectedBlock = Math.floor(Math.random() * 100);
        if (prevIdx) {
          if (!this.blocks[prevIdx].isClicked) {
            this.blocks[prevIdx].color = 'red';
            this.pcScore++;
            this.scoring();
          }
        }
        prevIdx = this.selectedBlock;
        this.blocks[this.selectedBlock].color = 'yellow';
        this.cdr.detectChanges();
      });
    }
  }

  public blockIsClicked(blockID: number): void {
    if (blockID === this.selectedBlock) {
      this.userScore++;
      this.blocks[blockID].color = 'green';
      this.blocks[blockID].isClicked = true;
      this.scoring();
    }
  }

  private scoring(): void {
    if (this.userScore === 10 || this.pcScore === 10) {
      this.gameOver = true;

      if (this.gameTimeSubscription) {
        this.gameTimeSubscription.unsubscribe();
        this.gameTimeSubscription = null;
      }

      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '400px';
      const winner = this.userScore > this.pcScore ? "User": "PC";

      const dialogRef = this.matDialog.open(GameResultModalComponent, {...dialogConfig, data: winner});
      dialogRef.afterClosed().subscribe((res: boolean) => {
        if (res) {
          this.userScore = 0;
          this.pcScore = 0;
          this.startGame(this.gameTime);
        }
      });
    }
  }

  private initGameBlocks(): void {
    this.blocks = [];
    for (let i = 0; i < 100; i++) {
      this.blocks.push({
        id: i,
        isClicked: false,
        color: 'blue'
      });
    }
  }
}

