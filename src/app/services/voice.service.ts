import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voice } from '../models/voice';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  URL_API = 'http://158.97.89.3/api/common';
  URL_DB = '?db=voice';

  selectedVoice: Voice = {
    idioma: '',
    codigo: '',
    nombre: ''
  }
  voices: Voice[] = [];

  constructor(private http: HttpClient) { }

  getVoices() {
    return this.http.get<Voice[]>(`${this.URL_API}${this.URL_DB}`);
  }

  createVoice(voice: Voice) {
    return this.http.post(`${this.URL_API}${this.URL_DB}`, voice);
  }

  updateVoice(voice: Voice) {
    return this.http.put(`${this.URL_API}/${voice._id}${this.URL_DB}`, voice);
  }

  deleteVoice(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}${this.URL_DB}`);
  }
}
