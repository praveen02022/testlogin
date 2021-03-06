import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { ReactiveFormsModule } from '@angular/forms';

import { FileSizePipe } from '../..//file-size.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreatePageRoutingModule
  ],
  declarations: [CreatePage,FileSizePipe]
})
export class CreatePageModule {}
