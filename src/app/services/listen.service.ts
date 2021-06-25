import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listen } from '../models/listen';

@Injectable({
  providedIn: 'root'
})
export class ListenService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=listen';

  selectedListen: Listen = {
    idioma: '',
    codigo: '',
    watson: ''
  }
  listens: Listen[] = [];

  constructor(private http: HttpClient) { }

  getListens() {
    return this.http.get<Listen[]>(`${this.URL_API}${this.URL_DB}`);
  }

  createListen(listen: Listen) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, listen);
  }

  updateListen(listen: Listen) {
    return this.http.put(`${this.URL_API}/${listen._id}${this.URL_DB}`, listen);
  }

  deleteListen(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
