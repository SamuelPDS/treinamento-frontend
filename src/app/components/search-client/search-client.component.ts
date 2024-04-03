import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
  providers: [HeaderComponent]
})
export class SearchClientComponent implements OnInit {

  constructor(private backend: BackendServiceService, httpCLient: HttpClient, private cpf: HeaderComponent) { }

  ngOnInit(): void {
 
  }

  // getClient(){
  //   const getCpf = `${this.backend}/${this.cpf.cpfClient}`
  //   console.log(getCpf)
  // }
}
