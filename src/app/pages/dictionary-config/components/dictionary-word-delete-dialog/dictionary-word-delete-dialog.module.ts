import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryWordDeleteDialogComponent } from './dictionary-word-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DictionaryWordDeleteDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class DictionaryWordDeleteDialogModule {}
