import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean;
  loginForm: FormGroup;
  showError = false;
  constructor(private loginService: LoginService, private router: Router, private loginFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.isAuthenticated = this.loginService.isAuthenticated(this.loginForm.get('username').value, this.loginForm.get('password').value);
    if (this.isAuthenticated) {
      sessionStorage.setItem('username', this.loginForm.get('username').value);
      this.router.navigate(['/available-rides']);
    } else {
      this.showError = true;
    }
  }
}
