import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/dictionary/dictionary.module').then(
        (m) => m.DictionaryModule
      ),
  },
  {
    path: 'dictionary',
    loadChildren: () =>
      import('./pages/dictionary/dictionary.module').then(
        (m) => m.DictionaryModule
      ),
  },
  {
    path: 'dictionary-config/:dictionaryId',
    loadChildren: () =>
      import('./pages/dictionary-config/dictionary-config.module').then(
        (m) => m.DictionaryConfigModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
