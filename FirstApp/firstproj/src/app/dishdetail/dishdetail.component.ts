import { Component, OnInit ,Input} from '@angular/core';
import {Dish} from '../Shared/Dish';
import {Params,ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../service/dish.service';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @Input()
  dish :Dish;
  constructor(private dishservice: DishService,
              private route :ActivatedRoute,
              private location :Location) { }

  ngOnInit(): void {
let id= this.route.snapshot.params['id'];
    this.dish=this.dishservice.getDish(id);
  }

  goBack():void{
    this.location.back();
  }

}
