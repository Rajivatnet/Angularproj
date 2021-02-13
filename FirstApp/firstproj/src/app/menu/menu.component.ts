import { Component, OnInit } from '@angular/core';
 import {Dish} from '../Shared/Dish';
// import{dishes} from '../shared/dishes';
import {DishService} from '../service/dish.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] ;
  selectedDish : Dish;

    constructor(private dishservice:DishService) { }

    onSelect( dish:Dish)
    {
      this.selectedDish=dish;
    }
  ngOnInit() {
this.dishes=this.dishservice.getDishes()
  }

}
