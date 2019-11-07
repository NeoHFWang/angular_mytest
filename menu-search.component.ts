import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { SubMenu, Menu} from 'src/app/Menu';
import {navMenus} from 'src/app/app.menu';


@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.styl']
})
export class MenuSearchComponent implements OnInit {
  title = 'Angular Search Using filter';
  searchText;
  subMenu = SubMenu;
  menu = Menu;

  navMenus = navMenus;
  menus: any[] = [];
  i = 0;



  ngOnInit(){
    this.getsonmenu();
  }

  getsonmenu(){
    navMenus.forEach(element => {
      element.subMenus.forEach(ele => {
        this.menus.push(ele);
        console.log(this.menus) ;
      });
     console.log(element.subMenus) ;
    });
  }
}



