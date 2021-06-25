import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mov } from '../models/mov';

@Injectable({
  providedIn: 'root'
})
export class MovService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=mov';

  selectedMov: Mov = {
    nombre: '',
    codigo: ''
  }
  movs: Mov[] = [];

  constructor(private http: HttpClient) { }

  getMovs() {
    return this.http.get<Mov[]>(`${this.URL_API}${this.URL_DB}`);
  }

  createMov(mov: Mov) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, mov);
  }

  updateMov(mov: Mov) {
    return this.http.put(`${this.URL_API}/${mov._id}${this.URL_DB}`, mov);
  }

  deleteMov(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
