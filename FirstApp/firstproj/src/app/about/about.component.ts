import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../service/leader.service';
import {Leaders} from '../Shared/leaders';
import {Leader} from '../Shared/leader';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice:LeaderService ) {}
leaders:Leader[];
  ngOnInit(): void {
    this.leaders= this.leaderservice.getLeaders();
  }

}
