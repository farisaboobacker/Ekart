import { Component,OnInit } from "@angular/core";

@Component({
  selector:"app-signup",
  templateUrl:"./Signup.component.html",
  standalone:true,
  styleUrl:"./Signup.component.css"
})

export class SignupComponent implements OnInit {
  ngOnInit(): void {
   

  }


  public print(){
     console.log("Hello World");
  }

}
