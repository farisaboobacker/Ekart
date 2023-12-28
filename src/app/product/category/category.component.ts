import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  ctyForm!:FormGroup;
  ngOnInit(): void {
    this.ctyForm=new FormGroup({
      ctyName:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      ctyDescription:new FormControl()
    }); // form ngForm
  }

  submit(){
    if (this.ctyForm.valid) {
      console.log(this.ctyForm.value);
    }
  }
}
