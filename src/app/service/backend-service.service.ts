import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
private url: any = 'http://localhost:8080/customer/AllDataCustomer';

getUrl(){
  return this.url;
}

  constructor(private httpCliente: HttpClient) { }

  postBackEnd(form: Customer) {
    return this.httpCliente.post(this.url, form);
  }

  getBackend(form: Customer) {

    return this.httpCliente.get(`${this.url}/${form}`);
  }
}
