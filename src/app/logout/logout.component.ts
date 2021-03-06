import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenauthenticationService } from '../authenauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(
    private authentocationService: AuthenauthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logout();
    this.router.navigate(['']);
  }

}
