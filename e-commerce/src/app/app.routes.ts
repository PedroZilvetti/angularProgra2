import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { EventDetailComponent } from '../pages/event-detail/event-detail.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'event/:id', component: EventDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otras rutas
  ];
  
