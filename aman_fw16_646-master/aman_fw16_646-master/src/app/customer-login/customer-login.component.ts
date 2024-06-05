import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private customerService: CustomerService) {}

  login() {
    this.customerService.getCustomers().subscribe(customers => {
      const customer = customers.find(c => c.username === this.username && c.password === this.password);
      if (customer) {
        // Navigate to home or some other page upon successful login
        localStorage.setItem('userData', JSON.stringify(customer));
        this.router.navigate(['/']);
      } else {
        // Show error message for invalid credentials
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

  registerUser() {
    // Navigate to user registration page
    this.router.navigate(['/user-register']);
  }
}
