import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Importar NgForm si usas formularios template-driven

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
  imports: [FormsModule],
})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  register() {
    this.authService.register(this.email, this.password);
  }
}
