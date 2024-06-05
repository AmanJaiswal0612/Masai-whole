import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menus: any[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
   
    this.menuService.getAllMenus().subscribe(data => {
      
      this.menus = data.data;
    });
  }
}
