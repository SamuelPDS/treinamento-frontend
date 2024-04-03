import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Customer } from 'src/app/shared/customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
formGroup!: FormGroup;
formSubmitted: boolean = false;
nameClient!: string;


  constructor(private formBuild: FormBuilder, private router: Router, private route: ActivatedRoute, private backend: BackendServiceService) { }

  ngOnInit(): void {
    this.createForm(new Customer())
  }


  createForm(customer: Customer) {
    this.formGroup = this.formBuild.group({
      name: [customer.name, [Validators.required]]
    })
  }


  onSubmit(){
    if(this.formGroup.valid) {
      this.goTo()
      const getName = this.backend.getBackend(this.formGroup.value['name'])

    } else {
      this.formSubmitted = true

    }
  }

  getName(e: any){
    this.nameClient = e.target.value
    return this.nameClient
  }

  goTo() {
    console.log('chamou')
    this.router.navigate(['/search'])
  }
}
