import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginAsRestaurant() {
    // Redirect to restaurant login page
    this.router.navigate(['/restaurant-login']);
  }

  loginAsCustomer() {
    // Redirect to customer login page
    this.router.navigate(['/customer-login']);
  }
}
