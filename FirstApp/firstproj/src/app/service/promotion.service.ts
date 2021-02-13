import { Injectable } from '@angular/core';
import {PROMOTIONS} from '../Shared/propmtions';
import {Promotion} from '../Shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions():Promotion[]{
    return PROMOTIONS;
  }
  getPromotion(id:string):Promotion{
    return PROMOTIONS.filter((promotion)=>(promotion.id===id))[0];
  }

  getFeaturePromotion():Promotion{
    return PROMOTIONS.filter((promo)=>(promo.featured))[0];
  }
}
