import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  sample=[{'name':'Apple','product':'01',remaining:120,total:120,isActive:true ,remainings:'0'},
          {'name':'Bringal','product':'02',remaining:20,total:120,isActive:false, remainings:'0'},
          {'name':'Orange','product':'03',remaining:20,total:120,isActive:true ,remainings:'0'},
          {'name':'Pineapple','product':'04',remaining:20,total:120,isActive:false ,remainings:'0' },
          {'name':'Banana','product':'05',remaining:20,total:120,isActive:true ,remainings:'0'}
          

]
  constructor() { }

  ngOnInit() {
  }

}
