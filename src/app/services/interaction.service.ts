import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Interaction } from '../models/interaction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=interaccion';

  interactions: Interaction[] = [];

  constructor(private http: HttpClient) { }

  getInteractions() {
    return this.http.get<Interaction[]>(this.URL_API);
  }

  createInteraction(script: Interaction) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, script);
  }

  updateInteraction(script: Interaction) {
    return this.http.put(`${this.URL_API}/${script._id}${this.URL_DB}`, script);
  }

  deleteInteraction(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
