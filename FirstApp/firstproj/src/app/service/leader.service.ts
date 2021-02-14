import { Injectable } from '@angular/core';
import {Leader} from '../Shared/leader';
import {Leaders} from '../Shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() { }
  getLeaders():Leader[]{
    return Leaders;
  }
  getLeader(id:string ):Leader{
 return Leaders.filter(l=>l.id)[0];
  }

  getFeaturedLeader():Leader
  {
    return Leaders.filter(l=>l.featured)[0];
  }
}
