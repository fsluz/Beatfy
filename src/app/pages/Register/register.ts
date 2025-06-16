import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

 
  failMessage: string | null = null;
  successMessage: string | null = null;
  redirectMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    
    this.failMessage = null;
    this.successMessage = null;

    
    if (this.email === 'admin@gmail.com') {
      this.failMessage = 'E‑mail já cadastrado, insira outro.';
      setTimeout(() => this.failMessage = null, 3000);
      return; 
    }

    
    this.successMessage = 'Cadastro realizado com sucesso!';
    setTimeout(() => this.successMessage = null, 3000);
  }

  handleRecoveryClick(event: Event) {
    event.preventDefault();
    this.redirectMessage = 'Redirecionando para login...';
    setTimeout(() => {
      this.redirectMessage = null;
      this.router.navigate(['/login']);
    }, 3000);
  }
}