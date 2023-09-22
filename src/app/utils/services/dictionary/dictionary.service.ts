import { dictionaries } from './../../db/db.fake';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDictionary } from '../../interfaces/dictionary.interface';
import { IDefaultService } from 'src/app/shared/interfaces/default-service.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class DictionariesService implements IDefaultService<IDictionary> {
  constructor() {}

  list(): Observable<IDictionary[]> {
    return of(dictionaries).pipe(
      map((dictionaries) =>
        dictionaries.sort(({ Nome }, { Nome: nextNome }) => {
          return Nome.localeCompare(nextNome);
        })
      )
    );
  }

  find(codigo: number): Observable<IDictionary | null> {
    const dictionary = dictionaries.find(
      ({ Codigo: dictionaryCodigo }) => dictionaryCodigo == codigo
    );

    if (!!dictionary && dictionary.Codigo) return of(dictionary);

    return of(null);
  }

  update(
    codigo: number,
    dictionary: IDictionary
  ): Observable<IDictionary | null> {
    let dictionaryIndexById = dictionaries.findIndex(
      ({ Codigo: dictionaryCodigo }) => dictionaryCodigo == codigo
    );

    if (dictionaryIndexById != -1) {
      let dictionaryUpdated = { ...dictionary };

      dictionaries[dictionaryIndexById] = dictionaryUpdated;

      return of(<IDictionary>dictionaryUpdated);
    }

    return of(null);
  }

  create(dictionary: IDictionary): Observable<IDictionary> {
    let { Codigo } = dictionary;
    Codigo = dictionaries.length + 1;

    const newDictionary = { ...dictionary, Codigo };

    dictionaries.push(newDictionary);

    return of(newDictionary);
  }

  delete(codigo: number) {
    const index = dictionaries.findIndex(
      (dictionary) => dictionary.Codigo === codigo
    );

    if (index !== -1) {
      dictionaries.splice(index, 1);

      return of({ success: true, message: 'Dicionario removido com sucesso!' });
    } else {
      return of({ success: false, message: 'Dicionario não encontrado!' });
    }
  }
}
