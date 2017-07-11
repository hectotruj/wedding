import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // reset login status
    localStorage.removeItem('currentUser');

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    if (this.model.password == 'something'){  
      localStorage.setItem('currentUser', 'true');
      this.router.navigate([this.returnUrl]);
    }
    else {
      this.loading = false;
    };
  }
}
