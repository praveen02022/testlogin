import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincalzCrudPageRoutingModule } from './fincalz-crud-routing.module';

import { FincalzCrudPage } from './fincalz-crud.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FincalzCrudPageRoutingModule
  ],
  declarations: [FincalzCrudPage]
})
export class FincalzCrudPageModule {}
