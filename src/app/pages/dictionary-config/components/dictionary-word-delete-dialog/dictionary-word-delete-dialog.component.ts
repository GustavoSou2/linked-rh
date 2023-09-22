import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDictionary } from 'src/app/utils/interfaces/dictionary.interface';
import { IWord } from 'src/app/utils/interfaces/word.interface';
import { WordService } from 'src/app/utils/services/word/word.service';

@Component({
  selector: 'app-dictionary-word-delete-dialog',
  templateUrl: './dictionary-word-delete-dialog.component.html',
  styleUrls: ['./dictionary-word-delete-dialog.component.scss'],
  providers: [WordService],
})
export class DictionaryWordDeleteDialogComponent implements OnInit {
  word!: IWord;

  constructor(
    public dialogRef: MatDialogRef<DictionaryWordDeleteDialogComponent>,
    private wordService: WordService,
    @Inject(MAT_DIALOG_DATA) public data: { word: IWord | null }
  ) {
    this.word = <IWord>data.word;
  }

  ngOnInit(): void {}

  onCloseDialog(context?: any) {
    this.dialogRef.close(context);
  }

  onDelete() {
    const { Codigo } = this.word;

    this.wordService.delete(<number>Codigo).subscribe(() => {
      this.onCloseDialog({ success: true });
    });
  }
}
