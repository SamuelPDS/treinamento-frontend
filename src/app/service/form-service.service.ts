import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
url: string = 'https://viacep.com.br/ws'


  constructor(private httpClient: HttpClient) { }

  getAdress(cep: string) {
    return this.httpClient.get(`${this.url}/${cep}/json`);
  }
}
