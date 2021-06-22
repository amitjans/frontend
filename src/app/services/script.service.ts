import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Script } from '../models/script';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=script';

  selectedScript: Script = {
    nombre: ''
  }
  scripts: Script[] = [];

  constructor(private http: HttpClient) { }

  getScripts() {
    return this.http.get<Script[]>(`${this.URL_API}${this.URL_DB}`);
  }

  createScript(script: Script) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, script);
  }

  updateScript(script: Script) {
    return this.http.put(`${this.URL_API}/${script._id}${this.URL_DB}`, script);
  }

  deleteScript(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
