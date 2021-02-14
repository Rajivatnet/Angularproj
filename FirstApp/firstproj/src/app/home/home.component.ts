import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../service/promotion.service';
import {LeaderService} from '../service/leader.service';
import { Leader } from '../Shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
leader:Leader;
  constructor(private dishservice:DishService,
    private promoService:PromotionService,
    private leaderservice:LeaderService) { }

  ngOnInit(): void {
    this.dish=this.dishservice.getFeatureDish();
    this.promotion=this.promoService.getFeaturePromotion();
    this.leader=this.leaderservice.getFeaturedLeader();
  }


}
