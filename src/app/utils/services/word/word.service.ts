import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWord } from '../../interfaces/word.interface';
import { map } from 'rxjs/operators';
import { words } from '../../db/db.fake';

@Injectable()
export class WordService {
  constructor() {}

  list(): Observable<IWord[]> {
    return of(words).pipe(
      map((dictionaries) =>
        dictionaries.sort(({ Texto }, { Texto: nextTexto }) => {
          return Texto.localeCompare(nextTexto);
        })
      )
    );
  }

  find(codigo: number): Observable<IWord | null> {
    const wordDefinition = words.find(
      ({ Codigo: dictionaryCodigo }) => dictionaryCodigo == codigo
    );

    if (!!wordDefinition && wordDefinition.Codigo) return of(wordDefinition);

    return of(null);
  }

  update(codigo: number, word: IWord): Observable<IWord | null> {
    let wordIndexById = words.findIndex(
      ({ Codigo: wordCodigo }) => wordCodigo == codigo
    );

    if (wordIndexById != -1) {
      let wordUpdated = { ...word };

      words[wordIndexById] = wordUpdated;

      return of(<IWord>wordUpdated);
    }

    return of(null);
  }

  create(word: IWord): Observable<IWord> {
    let { Codigo } = word;

    Codigo = words.length + 1;

    const newWord = { ...word, Codigo };

    words.push(newWord);

    return of(newWord);
  }

  delete(codigo: number) {
    const index = words.findIndex(({ Codigo }) => Codigo === codigo);

    if (index !== -1) {
      words.splice(index, 1);

      return of({ success: true, message: 'Palavra removido com sucesso!' });
    } else {
      return of({ success: false, message: 'Palavra não encontrado!' });
    }
  }

  findWordsByDictionary(codigo: number): Observable<IWord[]> {
    return of(words).pipe(
      map((words) =>
        words
          .filter(({ Cod_Dicionario }) => +Cod_Dicionario === +codigo)
          .sort(({ Texto }, { Texto: nextTexto }) => {
            return Texto.localeCompare(nextTexto);
          })
      )
    );
  }
}
