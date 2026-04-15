import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  personal = RESUME_DATA.personal;
  skills = RESUME_DATA.skills;
}
