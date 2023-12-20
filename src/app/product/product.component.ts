import { Component,OnInit } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import datas from '../../assets/users_10.json';
import { GstPipe } from '../gst.pipe';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,GstPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
 Users:any=datas;

  constructor(protected common:CommonService) {}
  // Data Binding
    // one way databinding
        // ts -> html
          // Interpolation {{}}
          // Property       []
        //html -> ts
          // Event Binding  ()

    // Two way data binding [()]



    schoolName:string="XYZ school";
    student:any=[
      {Name:"Akil",Age:25,Result:"pass"},
      {Name:"Akash",Age:25,Result:"fail"},
      {Name:"Arun",Age:25,Result:"pass"},
      {Name:"Akshay",Age:25,Result:"fail"}
    ];

    student2:any={
      data:[
      {Name:"Akil",Age:25,Result:"pass"},
      {Name:"Akash",Age:25,Result:"fail"},
      {Name:"Arun",Age:25,Result:"pass"},
      {Name:"Akshay",Age:25,Result:"fail"}
    ]};
    ngOnInit( ):void{
      // this.rote.params.subscribe((res:any)=>{
      //   alert(res['id']);
      // });
      console.log(this.Users[0].address.geo.lng)
      console.log(this.student[0]);
      // this.common.setData("Angular Services");
      // this.common.getData(); //
    }
    color="red";
}


