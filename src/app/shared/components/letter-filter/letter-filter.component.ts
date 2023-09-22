import {
  Component,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

function generateLetters() {
  const letters = [];

  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }

  return letters;
}

@Component({
  selector: 'letter-filter',
  templateUrl: './letter-filter.component.html',
  styleUrls: ['./letter-filter.component.scss'],
})
export class LetterFilterComponent implements OnInit {
  @Input() set selected(letter: any) {
    this.lettersSelected = letter;
  }

  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  letters: string[] = generateLetters();

  _innerLettersSelected: any;

  set lettersSelected(letter) {
    this._innerLettersSelected = letter;
  }

  get lettersSelected() {
    return this._innerLettersSelected;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.lettersSelected) {
      this.lettersSelected = 'all';
      this.onChange('all');
    }
  }

  onChange(event: any) {
    this.lettersSelected = event;

    this.onSelect.emit(event);
  }
}
