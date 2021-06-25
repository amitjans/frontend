import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScriptData } from '../models/scriptdata';

@Injectable({
  providedIn: 'root'
})
export class ScriptdataService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=scriptdata';

  selectedScriptData: ScriptData = {
    script: '',
    campo1: ''
  }
  scriptdata: ScriptData[] = [];

  constructor(private http: HttpClient) { }

  getScriptsData() {
    return this.http.get<ScriptData[]>(`${this.URL_API}${this.URL_DB}`);
  }

  createScriptData(scriptdata: ScriptData) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, scriptdata);
  }

  updateScriptData(scriptdata: ScriptData) {
    return this.http.put(`${this.URL_API}/${scriptdata._id}${this.URL_DB}`, scriptdata);
  }

  deleteScriptData(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
