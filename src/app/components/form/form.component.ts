import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { FormServiceService } from 'src/app/service/form-service.service';
import { Customer } from 'src/app/shared/customer';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private viaCep: FormServiceService, private backend: BackendServiceService) { }

  ngOnInit(): void {
    this.createForm(new Customer())
  }

  createForm(customer: Customer) {
    this.formGroup = this.formBuilder.group({
      name: [customer.name],
      cpf: [customer.cpf],
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
    console.log('clicado')
    console.log(this.formGroup.value)
    this.backend.postBackEnd(this.formGroup.value)
  }

  dados() {
    console.log(this.formGroup.get('name'))
  }


  getCEP(event: any) {
    const cep = event.target.value
    this.viaCep.getAdress(cep).subscribe(res => {
      console.log(res);
      this.addAdress(res);
    })
  }

  addAdress(res: any) {
    this.formGroup.get('street')?.setValue(res.logradouro)
    this.formGroup.get('complemento')?.setValue(res.complemento)
    this.formGroup.get('bairro')?.setValue(res.bairro)

  }


}
