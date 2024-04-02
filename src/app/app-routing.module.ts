import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchClientComponent } from './components/search-client/search-client.component';

const routes: Routes = [
  {path:'', redirectTo: '/header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'search', pathMatch: 'full', component: SearchClientComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
