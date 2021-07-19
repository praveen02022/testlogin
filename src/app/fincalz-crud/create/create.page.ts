import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../fincalz/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router'



import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {





//img upload

ngFireUploadTask: AngularFireUploadTask;

progressNum: Observable<number>;

progressSnapshot: Observable<any>;

fileUploadedPath: Observable<string>;

files: Observable<FILE[]>;

FileName: string;
FileSize: number;

isImgUploading: boolean;
isImgUploaded: boolean;



private ngFirestoreCollection: AngularFirestoreCollection<FILE>;



  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router,
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) { 
    this.isImgUploading = false;
    this.isImgUploaded = false;
    
    this.ngFirestoreCollection = angularFirestore.collection<FILE>('productlist');
    this.files = this.ngFirestoreCollection.valueChanges();

  }
  productsForm: FormGroup;
  ngOnInit() {
    this.productsForm = this.formBuilder.group({
      ProductName: [''],
      description: [''],
      weight: [''],
      measure: [''],
      defaultRate: [''],
      Images: [''],
    })
  }

  onSubmit() {
    if (!this.productsForm.valid) {
      return false;
    } else {
      this.crudService.create(this.productsForm.value)
      .then(() => {
        this.productsForm.reset();
        this.router.navigate(['./list']);
      }).catch((err) => {
        console.log(err)
      });
    }
    
  }





  
  fileUpload(event: FileList) {
      
    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') { 
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();
        
        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorage({
            name: file.name,
            filepath: resp,
            size: this.FileSize
          });
          this.isImgUploading = false;
          this.isImgUploaded = true;
        },error => {
          console.log(error);
        })
      }),
      tap(snap => {
          this.FileSize = snap.totalBytes;
      })
    )
}

fileStorage(image: FILE) {
  console.log('==>',image); 
  this.ngFirestoreCollection.add(image).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  });
} 


}
