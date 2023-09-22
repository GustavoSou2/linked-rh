import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryConfigComponent } from './dictionary-config.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DictionaryWordDeleteDialogModule } from './components/dictionary-word-delete-dialog/dictionary-word-delete-dialog.module';
import { DictionaryWordPutDialogModule } from './components/dictionary-word-put-dialog/dictionary-word-put-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LetterFilterModule } from 'src/app/shared/components/letter-filter/letter-filter.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DictionaryConfigComponent,
  },
];

@NgModule({
  declarations: [DictionaryConfigComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    DictionaryWordDeleteDialogModule,
    DictionaryWordPutDialogModule,
    MatDialogModule,
    LetterFilterModule,
    FormsModule
  ],
})
export class DictionaryConfigModule {}
