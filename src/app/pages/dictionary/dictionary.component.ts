import { Component, Injector, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { IDictionary } from 'src/app/utils/interfaces/dictionary.interface';
import { DictionariesService } from 'src/app/utils/services/dictionary/dictionary.service';
import { map, tap } from 'rxjs/operators';
import { DictionaryDeleteDialogComponent } from './components/dictionary-delete-dialog/dictionary-delete-dialog.component';
import { DictionaryPutDialogComponent } from './components/dictionary-put-dialog/dictionary-put-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

type DialogDictType = 'create' | 'update' | 'delete';

interface IDialogDict {
  create: any;
  update: any;
  delete: any;
}

const DIALOG_DICT: IDialogDict = {
  create: DictionaryPutDialogComponent,
  update: DictionaryPutDialogComponent,
  delete: DictionaryDeleteDialogComponent,
};

const providers = [DictionariesService];

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  providers,
})
export class DictionaryComponent implements OnInit {
  dictionaries$!: Observable<IDictionary[]>;

  search: string = '';

  constructor(
    private dictionariesService: DictionariesService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.dictionaries$ = this.getDictionarie();
  }

  getDictionarie() {
    return this.dictionariesService.list();
  }

  filterDictionaries(search: string) {
    const dictionariesWithoutFilteredApply = this.getDictionarie();

    const dictionariesFiltered = dictionariesWithoutFilteredApply.pipe(
      map((dictionaries) => {
        const filtered = dictionaries.filter(
          (dictionary: IDictionary) =>
            !!dictionary.Nome &&
            dictionary.Nome.toLocaleLowerCase().includes(
              search.toLocaleLowerCase()
            )
        );

        return filtered;
      })
    );

    if (!!search && search != '')
      return (this.dictionaries$ = dictionariesFiltered);

    return (this.dictionaries$ = this.getDictionarie());
  }

  openDialog<T>(type: DialogDictType, dictionary: IDictionary | null = null) {
    const dialogService = this.injector.get(MatDialog);

    const dialogRef = dialogService.open(DIALOG_DICT[type], {
      data: {
        dictionary,
      },
    });

    dialogRef
      .afterClosed()
      .subscribe(({ success, data: newDictionary } = { success: false }) => {
        if (success) this.dictionaries$ = this.getDictionarie();
      });
  }

  goToWords({ Codigo }: IDictionary) {
    const router = this.injector.get(Router);

    router.navigateByUrl(`dictionary-config/${Codigo}`);
  }
}
