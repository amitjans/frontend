import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Interaction } from '../models/interaction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  URL_API = 'http://192.168.1.69/api/common?db=interaccion';

  interactions: Interaction[] = [];

  constructor(private http: HttpClient) { }

  getInteractions() {
    return this.http.get<Interaction[]>(this.URL_API);
  }
}
