import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../fincalz/crud.service';


export class products {
  $key: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  productlist: products[];

  constructor(private crudService: CrudService) { }

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

  productsList() {
    this.crudService.getproductlists()
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }

}
