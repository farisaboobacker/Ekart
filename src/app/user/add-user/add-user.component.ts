import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,FormsModule,ToastModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  providers:[MessageService]
})
export class AddUserComponent {

  /**
   *
   */
  constructor(
    protected Scommon:CommonService,
    private msgPrime: MessageService,
    protected router:Router
    ){}

  submitdata(data:any){
    //alert(`${this.formData.name}${this.formData.email}${this.formData.password}`);
    this.Scommon.addUser(data).subscribe((res:any)=>{
      console.log(res);
      if (res["status"]==1) {
        this.msgPrime.add({ severity: 'success', summary: 'Success', detail: 'Registration Success' });
        setTimeout(()=>{
          this.router.navigate(["admin/user"]);
        },1000);
      }else {
        this.msgPrime.add({ severity: 'erroe', summary: 'Failed', detail: 'Registration Failed' });
      }
    })
  }

  alertPrime(){
    this.msgPrime.add({detail:"User added",summary:"Success",severity:"warn"})
  }
}
