import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDictionary } from 'src/app/utils/interfaces/dictionary.interface';
import { DictionariesService } from 'src/app/utils/services/dictionary/dictionary.service';

const providers = [DictionariesService];

@Component({
  selector: 'app-dictionary-delete-dialog',
  templateUrl: './dictionary-delete-dialog.component.html',
  styleUrls: ['./dictionary-delete-dialog.component.scss'],
  providers,
})
export class DictionaryDeleteDialogComponent implements OnInit {
  dictionary!: IDictionary;

  constructor(
    public dialogRef: MatDialogRef<DictionaryDeleteDialogComponent>,
    private dictionariesService: DictionariesService,
    @Inject(MAT_DIALOG_DATA) public data: { dictionary: IDictionary | null }
  ) {
    this.dictionary = <IDictionary>data.dictionary;
  }

  ngOnInit(): void {}

  onCloseDialog(context?: any) {
    this.dialogRef.close(context);
  }

  onDelete() {
    const { Codigo } = this.dictionary;

    this.dictionariesService.delete(<number>Codigo).subscribe(() => {
      this.onCloseDialog({ success: true });
    });
  }
}
