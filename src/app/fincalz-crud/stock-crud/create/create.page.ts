import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../fincalz/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router'



@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {




  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router,

  ) { 

 

  }
  stockForm: FormGroup;
  ngOnInit() {
    this.stockForm = this.formBuilder.group({
      purchaseid: [''],
      qty: [''],
      marginRate: [''],
      saleRate: ['']

    })
  }

  onSubmit() {
    if (!this.stockForm.valid) {
      return false;
    } else {
      this.crudService.createstock(this.stockForm.value)
      .then(() => {
        this.stockForm.reset();
        this.router.navigate(['./list']);
      }).catch((err) => {
        console.log(err)
      });
    }
    
  }

}
