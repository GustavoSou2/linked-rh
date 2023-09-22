import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDictionary } from 'src/app/utils/interfaces/dictionary.interface';
import { IWord } from 'src/app/utils/interfaces/word.interface';
import { DictionariesService } from 'src/app/utils/services/dictionary/dictionary.service';
import { WordService } from 'src/app/utils/services/word/word.service';
import { DictionaryWordDeleteDialogComponent } from './components/dictionary-word-delete-dialog/dictionary-word-delete-dialog.component';
import { DictionaryWordPutDialogComponent } from './components/dictionary-word-put-dialog/dictionary-word-put-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

type DialogDictType = 'create' | 'update' | 'delete';

interface IDialogDict {
  create: any;
  update: any;
  delete: any;
}

const DIALOG_DICT: IDialogDict = {
  create: DictionaryWordPutDialogComponent,
  update: DictionaryWordPutDialogComponent,
  delete: DictionaryWordDeleteDialogComponent,
};

const providers = [DictionariesService, WordService];

@Component({
  selector: 'app-dictionary-config',
  templateUrl: './dictionary-config.component.html',
  styleUrls: ['./dictionary-config.component.scss'],
  providers,
})
export class DictionaryConfigComponent implements OnInit {
  dictionaryID!: number;

  dictionary$!: Observable<IDictionary>;

  words$!: Observable<IWord[]>;

  lettersSelected!: string;

  constructor(
    private router: ActivatedRoute,
    private dictionariesService: DictionariesService,
    private wordService: WordService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const { dictionaryId } = this.router.snapshot.params;

    this.dictionaryID = dictionaryId;

    this.dictionary$ = this.findDictionary(dictionaryId);

    this.words$ = this.findWordsByDictionaryId(dictionaryId);
  }

  findDictionary(codigo: number): Observable<IDictionary> {
    return <Observable<IDictionary>>this.dictionariesService.find(codigo);
  }

  findWordsByDictionaryId(
    codigo: number,
    letterToFilter: string = 'all'
  ): Observable<IWord[]> {
    return this.wordService.findWordsByDictionary(codigo).pipe(
      map((words: IWord[]) => {
        if (letterToFilter === 'all') return <IWord[]>words;

        return <IWord[]>words.filter(({ Texto }) => {
          const firstLetterOfText = Texto.toLocaleLowerCase()[0];

          return firstLetterOfText == letterToFilter.toLocaleLowerCase();
        });
      })
    );
  }

  filterWordsByLetter(letter: string) {
    this.lettersSelected = letter;

    this.words$ = this.findWordsByDictionaryId(this.dictionaryID, letter);
  }

  openDialog<T>(type: DialogDictType, data?: any) {
    const dialogService = this.injector.get(MatDialog);

    const dialogRef = dialogService.open(DIALOG_DICT[type], {
      data,
    });

    dialogRef
      .afterClosed()
      .subscribe(({ success, data: nextDitionary } = { success: false }) => {
        if (success)
          this.words$ = this.findWordsByDictionaryId(this.dictionaryID);
      });
  }
}
