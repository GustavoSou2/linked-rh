import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryWordPutDialogComponent } from './dictionary-word-put-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DictionaryWordPutDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class DictionaryWordPutDialogModule {}
