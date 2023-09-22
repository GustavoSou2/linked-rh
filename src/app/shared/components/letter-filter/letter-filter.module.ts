import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterFilterComponent } from './letter-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LetterFilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [LetterFilterComponent],
})
export class LetterFilterModule {}
