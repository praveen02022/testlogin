import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincalzCrudPage } from './fincalz-crud.page';

const routes: Routes = [
  {
    path: '',
    component: FincalzCrudPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FincalzCrudPageRoutingModule {}
