import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MenuService } from '../menu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  orders: any[] = [];
  restaurants: any[] = [];
  menus: any[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private menuService: MenuService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    const userData = localStorage.getItem('userData');
    if (userData) {
      this.isLoggedIn = true;
      const customer = JSON.parse(userData);
      const customerId = customer.id;

      this.http.get<any[]>('http://localhost:3000/orders').subscribe(orders => {

        this.orders = orders.filter(order => order.customerId == customerId);
  
      });
    }
  

    this.restaurantService.getAllRestaurants().subscribe(data => {
    
      this.restaurants = data;
    });

    this.menuService.getAllMenus().subscribe(data => {
      this.menus = data.data;
    });
  }
}
