import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgUploadPageRoutingModule } from './img-upload-routing.module';

import { ImgUploadPage } from './img-upload.page';

import { FileSizePipe } from '../file-size.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgUploadPageRoutingModule
  ],
  declarations: [ImgUploadPage,FileSizePipe]
})
export class ImgUploadPageModule {}
