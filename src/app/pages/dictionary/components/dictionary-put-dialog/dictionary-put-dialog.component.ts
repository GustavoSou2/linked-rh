import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDictionary } from 'src/app/utils/interfaces/dictionary.interface';
import { DictionariesService } from 'src/app/utils/services/dictionary/dictionary.service';

const DialogFieldsArr = [
  {
    label: 'Cor do Botão',
    formControlName: 'Cor_Botao',
    name: 'corBotao',
  },
  {
    label: 'Cor da Fonte',
    formControlName: 'Cor_Botao_Font',
    name: 'corBotaoFont',
  },
  {
    label: 'Cor do Título',
    formControlName: 'Cor_Titulo',
    name: 'corTitulo',
  },
  {
    label: 'Cor do Ícone',
    formControlName: 'Cor_Icone',
    name: 'corIcone',
  },
];

const providers = [DictionariesService];

@Component({
  selector: 'app-dictionary-put-dialog',
  templateUrl: './dictionary-put-dialog.component.html',
  styleUrls: ['./dictionary-put-dialog.component.scss'],
  providers,
})
export class DictionaryPutDialogComponent implements OnInit {
  form!: FormGroup;

  isEdit: boolean = false;

  DialogFieldsArr = DialogFieldsArr;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DictionaryPutDialogComponent>,
    private dictionariesService: DictionariesService,
    @Inject(MAT_DIALOG_DATA)
    public data: { dictionary: IDictionary | null }
  ) {
    const { dictionary } = this.data;

    this.isEdit = !!dictionary && !!dictionary.Codigo;

    this.form = this.fb.group({
      Codigo: [dictionary?.Codigo || null],
      Nome: [dictionary?.Nome || '', Validators.required],
      Cor_Botao: [dictionary?.Cor_Botao || '#000000', Validators.required],
      Cor_Botao_Font: [
        dictionary?.Cor_Botao_Font || '#FFFFFF',
        Validators.required,
      ],
      Cor_Icone: [dictionary?.Cor_Icone || '#FFFFFF', Validators.required],
      Cor_Titulo: [dictionary?.Cor_Titulo || '#FFFFFF', Validators.required],
    });
  }

  ngOnInit(): void {}

  onCloseDialog(context?: any) {
    this.dialogRef.close(context);
  }

  onSubmit(): void {
    const { value: dictionary }: { value: IDictionary } = this.form;

    if (!dictionary.Codigo) {
      this.dictionariesService.create(dictionary).subscribe((data) => {
        this.onCloseDialog({ success: true, data });
      });

      return;
    }

    this.dictionariesService
      .update(dictionary.Codigo, dictionary)
      .subscribe((data) => {
        this.onCloseDialog({ success: true, data });
      });

    return;
  }
}
