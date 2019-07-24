import { Component, OnInit } from '@angular/core';
import {TripsService} from '../trips.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tripsService: TripsService) {
    tripsService.getTrips()
   }

  ngOnInit() {
  }

}