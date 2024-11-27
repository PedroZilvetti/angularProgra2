import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  provideFirebaseApp(() => initializeApp({
    projectId: "ecomerce-fc050",
    appId: "1:385513628433:web:cbd3823811bcebb58022b0",
    storageBucket: "ecomerce-fc050.firebasestorage.app",
    apiKey: "AIzaSyDq0-tuyOQqdFblXN3Hit4h_9XUm-EaCBM",
    authDomain: "ecomerce-fc050.firebaseapp.com",
    messagingSenderId: "385513628433"
  })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore())]
};

