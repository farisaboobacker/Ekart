import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  // name:any;
  // price:any;
  // btnData:any;
  // status:any=0; //0 1
  // formSubmit(pdt_name:any,pdt_price:any){
  //   this.name=pdt_name;
  //   this.price=pdt_price;
  //   return false;
  // }

  // backcolor:any;
  // change(){
  //   this.status=1;
  //   this.backcolor=(this.status==0)?"bg-danger-subtle p-5":"bg-success-subtle p-5 border";
  // }
  data:any;

  formSubmit(data:any){
    alert(data.pdt_name);
    alert(data.pdt_price);
  }
}
