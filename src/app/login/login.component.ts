import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // new
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true, // new
  imports: [CommonModule,FormsModule], //new
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
ngOnInit(): void {

}

}
