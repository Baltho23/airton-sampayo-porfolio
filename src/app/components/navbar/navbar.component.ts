import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  menuOpen = signal(false);
  activeSection = signal('hero');
  scrolled = signal(false);

  links: NavLink[] = [
    { label: 'Perfil',      anchor: 'about'      },
    { label: 'Experiencia', anchor: 'experience'  },
    { label: 'Estudios',    anchor: 'education'   },
    { label: 'Proyectos',   anchor: 'projects'    },
    { label: 'Contacto',    anchor: 'contact'     },
  ];

  private sectionIds = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const offset = 120;
    let current = 'hero';
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }

  scrollTo(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
