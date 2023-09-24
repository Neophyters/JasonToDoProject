import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css']
})
export class MakeListComponent {
  
  makeListForm: FormGroup;
  completeList: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.makeListForm = this.formBuilder.group({
    newItem: [""]
    });
  }

  addToList(){
    this.completeList.push(this.makeListForm.get("newItem")?.value);
    console.log(this.makeListForm.get("newItem")?.value);
    this.makeListForm.get("newItem")?.setValue(""); 
    

  }

}
