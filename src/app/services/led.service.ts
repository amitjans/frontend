import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Led } from '../models/led';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  URL_API = 'http://158.97.89.3/api/common?db=led';

  leds: Led[] = [];

  constructor(private http: HttpClient) { }

  getLeds() {
    return this.http.get<Led[]>(this.URL_API);
  }
}
