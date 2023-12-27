import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
  providers:[MessageService]
})
export class EditUserComponent implements OnInit{
/**
 *
 */
constructor(
  protected Scommon:CommonService,
  private msgPrime: MessageService,
  protected router:Router
  ){}
  editData:any={id:0,name:'',email:"",password:""};
  ngOnInit(): void {
    var getemail:any=this.Scommon.Email;
    this.Scommon.getone(getemail).subscribe((res:any)=>{
      this.editData.id=res.content.id;
      this.editData.name=res.content.name;
      this.editData.email=res.content.email;
      this.editData.password=res.content.password;
      console.log(res.content);
    });
  }

  submitdata(data:any){
    console.log(data)
    this.Scommon.update(data).subscribe((res:any)=>{
      console.log(res)
      if (res["status"]==1) {
        this.msgPrime.add({ severity: 'success', summary: 'Success', detail: 'Updation Success' });
        setTimeout(()=>{
          this.router.navigate(["admin/user"]);
        },1000);
      }else {
        this.msgPrime.add({ severity: 'erroe', summary: 'Failed', detail: 'updation Failed' });
      }
    });
  }
}
