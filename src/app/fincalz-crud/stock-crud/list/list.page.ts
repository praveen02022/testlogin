import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../fincalz/crud.service';  



export class stock {
  $key: string;
  purchaseid: string;
  qty:number;
  marginRate:string;
  saleRate:number
}


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})


export class ListPage implements OnInit {
  stocklist: stock[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getstocklists().subscribe((res) => {
      this.stocklist = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as stock
        };
      })
    });
  }

  stockList() {
    this.crudService.getstocklists()
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.deletestock(id)
    }
  }


}
