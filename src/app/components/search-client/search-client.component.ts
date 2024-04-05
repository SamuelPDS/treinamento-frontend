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
  formGroupClient!: FormGroup;
  formSubmitted: boolean = false;
  nameClient!: string;
  clientData!: any;
  isClicked: boolean = false;

  constructor(private formBuilder: FormBuilder, private backend: BackendServiceService, httpCLient: HttpClient, private cpf: HeaderComponent) { }

  ngOnInit(): void {
    this.createForm(new Customer());
    this.createFormPut(new Customer());
  }

  createForm(customer: Customer) {
    this.formGroup = this.formBuilder.group({
      name: [customer.name]
    })
  }

  createFormPut(customer: Customer) {
    this.formGroupClient = this.formBuilder.group({
      name: [customer.name],
      email: [customer.email],
      bornData: [customer.bornData],
      cep: [customer.cep],
      street: [customer.street],
      streetNum: [customer.streetNum],
      bairro: [customer.bairro],
      complemento: [customer.complemento]
    })

  }

  onSubmit(){
    this.backend.getBackend(this.formGroup.value['name']).subscribe(res => {
        this.clientData = res;
        console.log(res);
      })
  };

  onDelete(cpf: string) {
    console.log(cpf);
    this.backend.deleteBackend(cpf).subscribe(res => {
      console.log('Deletado')
      window.location.reload()
    })
  }

  onPut(cpf: string) {
    console.log('Cliente cadastrado com sucesso')
    console.log(this.formGroupClient.value)
    this.backend.putBackend(cpf, this.formGroupClient.value).subscribe(res => {
    })
  }


  // getClient(){
  //   const getCpf = `${this.backend}/${this.cpf.cpfClient}`
  //   console.log(getCpf)
  // }
}
