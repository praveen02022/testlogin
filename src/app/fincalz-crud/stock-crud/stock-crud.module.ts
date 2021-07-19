import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockCrudPageRoutingModule } from './stock-crud-routing.module';

import { StockCrudPage } from './stock-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockCrudPageRoutingModule
  ],
  declarations: [StockCrudPage]
})
export class StockCrudPageModule {}
