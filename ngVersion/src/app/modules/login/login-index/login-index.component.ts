import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  constructor(public fb:FormBuilder,private as:AuthService,private router:Router,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    console.log(this.as.isLogin)
  }
  loginForm = this.fb.group({
    "name":['',[Validators.required]],
    "password":['',[Validators.required]]
  })
  login(){
    this.as.login().subscribe(v=>{
      if(this.as.isLogin){
        console.log(this.as.isLogin)
        this.snackBar.open('Log in Successful','dismiss');
        this.router.navigate(['index/form'])
      }
    })
  }
}
