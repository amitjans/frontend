import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Led } from '../models/led';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  URL_API = 'http://192.168.1.69/api/common?db=led';

  leds: object[] = [];

  constructor(private http: HttpClient) { }

  getLeds() {
    return this.http.get<object[]>(this.URL_API);
  }
}
