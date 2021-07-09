import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDeatailsPage } from './stock-deatails.page';

const routes: Routes = [
  {
    path: '',
    component: StockDeatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDeatailsPageRoutingModule {}
