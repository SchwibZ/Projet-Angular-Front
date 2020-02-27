import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';


const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent , data: { myTitle: 'Connexion' } },
  { path: 'home', component: HomeComponent , data: { myTitle: 'Home' } , children:[
    { path: 'planning', component: PlanningComponent , data: { myTitle: 'Planning' } },
    { path: 'con', component: LoginComponent , data: { myTitle: 'Login' } },
    { path: 'home', component: HomeComponent , data: { myTitle: 'Home' } },
  ]},
  { path: '**', redirectTo: '/connexion' }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
