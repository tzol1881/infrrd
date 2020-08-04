import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // below parameter is to show or hide mobile menu
  mobileMenu = true;
  @Output() showAddRide = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.setItem('username', '');
    this.router.navigate(['']);
  }
}
