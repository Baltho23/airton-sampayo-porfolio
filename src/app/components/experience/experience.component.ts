import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule, TagModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience = RESUME_DATA.experience;
}
