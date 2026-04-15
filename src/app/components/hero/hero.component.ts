import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  personal = RESUME_DATA.personal;

  typewriterText = signal('');
  private phrases = [
    'Desarrollador Full-Stack',
    'Angular & React Developer',
    'Spring Boot Backend Dev',
    'Apasionado por el código limpio',
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
  }

  private tick(): void {
    const current = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typewriterText.set(current.substring(0, this.charIndex));

    let delay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 400;
    }

    this.timerId = setTimeout(() => this.tick(), delay);
  }

  scrollTo(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
