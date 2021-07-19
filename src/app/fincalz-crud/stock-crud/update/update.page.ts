import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../fincalz/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router ,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {


  
  editForm: FormGroup;
  id: any;
  constructor(
    private crudService:CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
    ) { 

      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudService.getstocklist(this.id).subscribe((data) => {
        this.editForm = this.formBuilder.group({
  
          purchaseid: [data['purchaseid']],
          qty: [data['qty']],
          marginRate: [data['marginRate']],
          saleRate: [data['saleRate']],

        })
      });
    }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      purchaseid: [''],
      qty: [''],
      marginRate: [''],
      saleRate: ['']

    })
  }

  onSubmit() {
    this.crudService.updatestock(this.id, this.editForm.value)
  }
}
