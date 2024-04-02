import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
private url: any = 'http://localhost:8080/AllDataCustomer';

  constructor(private httpCliente: HttpClient) { }

  postBackEnd(form: Customer) {
    this.httpCliente.post(this.url, form);
  }
}
