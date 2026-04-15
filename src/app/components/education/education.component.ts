import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education = RESUME_DATA.education;
  certifications = RESUME_DATA.certifications;
}
