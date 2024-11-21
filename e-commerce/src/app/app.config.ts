import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule, ReactiveFormsModule, AngularFireAuthModule, CommonModule),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDq0-tuyOQqdFblXN3Hit4h_9XUm-EaCBM",
      authDomain: "ecomerce-fc050.firebaseapp.com",
      projectId: "ecomerce-fc050",
      storageBucket: "ecomerce-fc050.firebasestorage.app",
      messagingSenderId: "385513628433",
      appId: "1:385513628433:web:cbd3823811bcebb58022b0"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
