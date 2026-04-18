import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  personal = RESUME_DATA.personal;

  name = '';
  email = '';
  message = '';
  submitted = signal(false);

  onSubmit(): void {
    if (this.name && this.email && this.message) {
      const text = `Hola Airton, te escribo desde tu portafolio 👋\n\n*Nombre:* ${this.name}\n*Email:* ${this.email}\n\n*Mensaje:*\n${this.message}`;
      const whatsappUrl = `https://wa.me/573247006090?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      this.submitted.set(true);
      setTimeout(() => {
        this.submitted.set(false);
        this.name = '';
        this.email = '';
        this.message = '';
      }, 4000);
    }
  }
}
