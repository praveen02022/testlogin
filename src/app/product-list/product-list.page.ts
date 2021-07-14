import { Component, OnInit } from '@angular/core';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { CrudService } from './../fincalz/crud.service';

export class products {
  $key: string;
  ProductName: string;
  description: string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productlist: products[];
  animals: string[] = ["Active produts", "Inactive produts"];
  sample=[{'name':'Apple','product':'01',remaining:120,total:120,isActive:true ,remainings:'0'},
          {'name':'Bringal','product':'02',remaining:20,total:120,isActive:false, remainings:'0'},
          {'name':'Orange','product':'03',remaining:20,total:120,isActive:true ,remainings:'0'},
          {'name':'Pineapple','product':'04',remaining:20,total:120,isActive:false ,remainings:'0' },
          {'name':'Banana','product':'05',remaining:20,total:120,isActive:true ,remainings:'0'}
          

]
  constructor(
    
    private pickerController: PickerController,
    private crudService: CrudService
    ) { }

  ngOnInit() {

    this.crudService.getproductlists().subscribe((res) => {
      this.productlist = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as products
        };
      })
    });
  }
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Animals',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.animals.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }
}
