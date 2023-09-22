import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IWord } from 'src/app/utils/interfaces/word.interface';
import { WordService } from 'src/app/utils/services/word/word.service';

const providers = [WordService];

@Component({
  selector: 'app-dictionary-word-put-dialog',
  templateUrl: './dictionary-word-put-dialog.component.html',
  styleUrls: ['./dictionary-word-put-dialog.component.scss'],
  providers,
})
export class DictionaryWordPutDialogComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DictionaryWordPutDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { word: IWord | null; dictionaryId: number },
    private WordService: WordService
  ) {
    const { word, dictionaryId } = this.data;

    this.isEdit = !!word?.Codigo ?? false;

    this.form = this.fb.group({
      Codigo: [word?.Codigo || null],
      Cod_Dicionario: [word?.Cod_Dicionario || dictionaryId || null],
      Texto: [word?.Texto || null, Validators.required],
      Definicao: [word?.Definicao || null, Validators.required],
      Definicao_Extra: [word?.Definicao_Extra || null, Validators.required],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onCloseDialog(context?: any) {
    this.dialogRef.close(context);
  }

  onSubmit(): void {
    const { value: formValueWord } = this.form;

    if (!formValueWord.Codigo) {
      this.WordService.create(formValueWord).subscribe((data) => {
        this.onCloseDialog({ success: true, data });
      });
    }

    this.WordService.update(formValueWord.Codigo, formValueWord).subscribe(
      (data) => {
        this.onCloseDialog({ success: true, formValueWord });
      }
    );
  }
}
