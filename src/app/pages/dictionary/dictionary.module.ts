import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DictionaryPutDialogComponent } from './components/dictionary-put-dialog/dictionary-put-dialog.component';
import { DictionaryDeleteDialogComponent } from './components/dictionary-delete-dialog/dictionary-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: DictionaryComponent,
    children: [],
  },
];

@NgModule({
  declarations: [
    DictionaryComponent,
    DictionaryPutDialogComponent,
    DictionaryDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [],
})
export class DictionaryModule {}
