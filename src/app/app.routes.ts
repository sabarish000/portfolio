import { Routes } from '@angular/router';

export const routes: Routes = [
    
    { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) }, // Default route
    { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'experience', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) },
    { path: 'skills', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent)  },
    { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)  },

    { path: '**', redirectTo: '' } // Wildcard route
  ];
