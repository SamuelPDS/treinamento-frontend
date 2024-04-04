import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/customer';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
  providers: [HeaderComponent]
})
export class SearchClientComponent implements OnInit {
  formGroup!: FormGroup;
  formSubmitted: boolean = false;
  nameClient!: string;
  clientData!: any;

  constructor(private formBuilder: FormBuilder, private backend: BackendServiceService, httpCLient: HttpClient, private cpf: HeaderComponent) { }

  ngOnInit(): void {
    this.createForm(new Customer());
  }

  createForm(customer: Customer) {
    this.formGroup = this.formBuilder.group({
      name: [customer.name]
    })

  };

  onSubmit(){
    this.backend.getBackend(this.formGroup.value['name']).subscribe(res => {
        this.clientData = res;
      })

  };

  // getClient(){
  //   const getCpf = `${this.backend}/${this.cpf.cpfClient}`
  //   console.log(getCpf)
  // }
}
