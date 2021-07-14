import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router"

export class products {
  $key: string;
  ProductName: string;
  description: string;
  weight:number;
  measure:string;
  defaultRate:number
}


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  
  create(products: products) {
    return this.ngFirestore.collection('productlist').add(products);
  }

  getproductlists() {
    return this.ngFirestore.collection('productlist').snapshotChanges();
  }
  
  getproductlist(id) {
    return this.ngFirestore.collection('productlist').doc(id).valueChanges();
  }

  update(id, products: products) {
    this.ngFirestore.collection('productlist').doc(id).update(products)
      .then(() => {
        this.router.navigate(['/products-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('productlist/' + id).delete();
  }
}
