import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'search', pathMatch: 'full', component: SearchClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
