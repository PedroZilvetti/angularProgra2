import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // Método para iniciar sesión
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });
  }

  logout() {
    return this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}