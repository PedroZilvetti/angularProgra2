import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Importar NgForm si usas formularios template-driven

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
  imports: [FormsModule],
})
export class LoginComponent {
  email: "";
  password: "";

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
  }
}