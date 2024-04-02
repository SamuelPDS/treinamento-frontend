import { Component, OnInit } from '@angular/core';
import {FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private viaCep: FormServiceService, private backend: BackendServiceService) { }

  ngOnInit(): void {
    this.createForm(new Customer())
  }

  createForm(customer: Customer) {
    this.formGroup = this.formBuilder.group({
      name: [customer.name, [Validators.required]],
      cpf: [customer.cpf, [Validators.required, Validators.minLength(11)]],
      email: [customer.email,Validators.required],
      bornData: [customer.bornData,Validators.required],
      cep: [customer.cep,Validators.required],
      street: [customer.street,Validators.required],
      streetNum: [customer.streetNum,Validators.required],
      bairro: [customer.bairro,Validators.required],
      complemento: [customer.complemento]
    }) 
  
  }


  onSubmit(){
    if(this.formGroup.valid) {
      console.log(this.formGroup)
      console.log('enviado')
      console.log(this.formGroup.value)
      this.backend.postBackEnd(this.formGroup.value).subscribe(res => {
      })
    } else {
      console.log(this.formGroup)
     this.formSubmitted = true
    }
  }


  getCEP(event: any) {
    const cep = event.target.value
    this.viaCep.getAdress(cep).subscribe(res => {
      // console.log(res);
      this.addAdress(res);
    })
  }

  addAdress(res: any) {
    this.formGroup.get('street')?.setValue(res.logradouro)
    this.formGroup.get('complemento')?.setValue(res.complemento)
    this.formGroup.get('bairro')?.setValue(res.bairro)
  }


}
