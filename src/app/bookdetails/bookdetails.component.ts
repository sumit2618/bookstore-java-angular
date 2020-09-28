import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { AuthenauthenticationService } from "../authenauthentication.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(public loginservice:AuthenauthenticationService, private router:Router, private bookservice: BookService, private activatedroute: ActivatedRoute) { }

  book: any = []
  id: number
  form:FormGroup
  userid = sessionStorage.getItem('userid');

  register(){

    if(this.form.value.quantity <=0){
      alert("Quantity Must be More or equal to 1")
      this.router.navigate(['/bookdetails' ,this.form.value.bookId]);
    }

    if(this.loginservice.isUserLogin()==true){
      sessionStorage.setItem('qt' , this.form.value.quantity);
      this.router.navigate(['/purchase',this.form.value.bookId]);
    }else{
      alert("Login First to place order..!")
      this.router.navigate(['/login']);
    }

  }

  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.bookservice.getDataById(this.id).subscribe((data) => {
        this.book = data;
        console.log(this.book)
      })
    })

  }

  ngOnInit(): void {
      this.getData();

      this.form = new FormGroup({
        bookId:new FormControl(this.id),
        quantity:new FormControl("")
      })
  }
}
