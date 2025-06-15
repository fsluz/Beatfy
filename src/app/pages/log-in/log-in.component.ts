import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class RegisterComponent {

  username: string = '';
  password: string = '';
  
  successMessage: string | null = null;
  failMessage: string | null = null;

  onSubmit() {
    
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    
  if (this.username === 'admin' && this.password === '123') {
    this.successMessage = `Bem-vindo! ${this.username}.`;
    this.failMessage = null;
  } else {
    this.failMessage = `Usuário ou senha incorreta!`;
    this.successMessage = null;

    // ⬇ Limpar a mensagem de erro também
    setTimeout(() => {
      this.failMessage = null;
    }, 3000);

    return;
  }

  setTimeout(() => {
    this.successMessage = null;
  }, 3000);
}
}