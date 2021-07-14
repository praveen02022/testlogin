import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../fincalz/crud.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {


  editForm: FormGroup;
  id: any;
  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getproductlist(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({

       ProductName: [data['ProductName']],
        description: [data['description']],
        weight: [data['weight']],
        measure: [data['measure']],
        defaultRate:[data['defaultRate']],
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      ProductName: [''],
      description: [''],
      weight: [''],
      measure: [''],
      defaultRate: [''],
    })    
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }

}
