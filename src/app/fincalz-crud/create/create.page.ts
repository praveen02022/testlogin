import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../fincalz/crud.service';
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
    private router: Router
  ) { }
  productsForm: FormGroup;
  ngOnInit() {
    this.productsForm = this.formBuilder.group({
      ProductName: [''],
      description: [''],
      weight: [''],
      measure: [''],
      defaultRate: [''],
    })
  }

  onSubmit() {
    if (!this.productsForm.valid) {
      return false;
    } else {
      this.crudService.create(this.productsForm.value)
      .then(() => {
        this.productsForm.reset();
        this.router.navigate(['list']);
      }).catch((err) => {
        console.log(err)
      });
    }
    
  }

}
