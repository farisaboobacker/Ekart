import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../service/common.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule,ToastModule],
  providers:[MessageService]
})
export class UserComponent implements OnInit{
  constructor(
    protected Scommon:CommonService,
    private msgPrime: MessageService,
    protected route:Router
    ) {
  }

  UserData:any=[];

  ngOnInit(): void {
    this.Scommon.getData().subscribe((res:any)=>{
      this.UserData=res["data"];
    });
  }
  delete(id:any){
    console.log(id)
    this.Scommon.deleteUser(id).subscribe((res:any)=>{
      if (res["status"]==1) {
        this.msgPrime.add({ severity: 'error', summary: 'Success', detail: 'Deleted ' });
        this.Scommon.getData().subscribe((res:any)=>{
          this.UserData=res["data"];
        });
      }else {
        this.msgPrime.add({ severity: 'warn', summary: 'Failed', detail: 'Deletion Failed' });
      }
    });
  }

  edit(email:any){
    this.Scommon.Email=email;
    this.route.navigate(['admin/edituser']);
  }
}
