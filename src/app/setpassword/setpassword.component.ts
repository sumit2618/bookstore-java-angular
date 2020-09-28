import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { AuthenauthenticationService } from "../authenauthentication.service";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  constructor(private userservice:UserserviceService , private router: Router, private activatedroute: ActivatedRoute) { }

  setpassword:FormGroup

  changePassword(){
    if (this.setpassword.value.password!=this.setpassword.value.confirmpassword) {
      alert("passwords are not matching")
      this.router.navigateByUrl('/forgot')
    }else{
      this.userservice.changePassword(this.setpassword.value).subscribe((res)=>{
        alert("Password changed successfully..!")
        console.log(res);
        this.router.navigateByUrl('/login')
      })
    }
  }

  ngOnInit(): void {

    this.setpassword =new FormGroup({
      phoneNo:new FormControl(""),
      email:new FormControl(""),
      pincode:new FormControl(""),
      password:new FormControl(""),
      confirmpassword:new FormControl("")
    })
  }

}
