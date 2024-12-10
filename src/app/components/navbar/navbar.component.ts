import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { HomeComponent } from "../home/home.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, ExperienceComponent, HomeComponent, SkillsComponent, ContactComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeTab = 'home'; // Default active tab

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
