import { Injectable } from '@angular/core';
import {Dish} from '../Shared/Dish';
import {dishes} from '../Shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Dish[]{
    return dishes;
  }
  getDish(id:string):Dish{
return dishes.filter((dish)=> (dish.id===id))[0];
  }
  getFeatureDish():Dish{
    return dishes.filter((dish) =>(dish.featured))[0];
  }

}
