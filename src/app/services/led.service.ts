import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Led } from '../models/led';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=led';

  leds: Led[] = [];

  constructor(private http: HttpClient) { }

  getLeds() {
    return this.http.get<Led[]>(this.URL_API);
  }

  createLed(script: Led) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, script);
  }

  updateLed(script: Led) {
    return this.http.put(`${this.URL_API}/${script._id}${this.URL_DB}`, script);
  }

  deleteLed(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
