import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  newUsername: string = '';
  newPassword: string = '';
  email: string = '';
  address: string = '';
  mobile: string = '';

  constructor(private router: Router, private customerService: CustomerService) {}

  register() {

    
    const newUser = {
      username: this.newUsername,
      password: this.newPassword,
      gmail: this.email,
      address: this.address,
      mobile: this.mobile,
      orders: []
    };
    
    // Add new user to the database
    this.customerService.addCustomer(newUser).subscribe(() => {
      // Navigate to home or some other page upon successful registration
      this.router.navigate(['/customer-login']);
    });
  }
}
