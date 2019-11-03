import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// In order use routing import below 
import  { RouterModule, Route, Routes } from '@angular/router'

//Refer the compoenets which needs to routed  
import  { HeroesComponent } from  './heroes/heroes.component'
import  { DashboardComponent }  from  './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//declare the routes  
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]; 


//import the routes in imports sections 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],  

  exports: [RouterModule]
})
export class AppRoutingModule { }
