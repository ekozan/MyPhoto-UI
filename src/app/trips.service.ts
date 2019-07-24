import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trip } from './trip'
//import 'rxjs/add/observable/throw';

@Injectable()
export class TripsService {

  readonly API_URL = 'https://api.franck.cloud';

  constructor(private http: HttpClient) { }

  getTrips() {
    return this.http.get<Trip[]>(`${this.API_URL}/trips`);
  }

}