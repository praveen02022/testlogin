import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePage } from '../update/update.page';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'update',
    component: UpdatePage
  },
  {
    path: 'update/:id',
    loadChildren: () => import('../update/update.module').then( m => m.UpdatePageModule),
    component: UpdatePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
