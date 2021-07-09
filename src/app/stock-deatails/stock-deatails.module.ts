import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDeatailsPageRoutingModule } from './stock-deatails-routing.module';

import { StockDeatailsPage } from './stock-deatails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockDeatailsPageRoutingModule
  ],
  declarations: [StockDeatailsPage]
})
export class StockDeatailsPageModule {}
