import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      category: 'Backend',
      technologies: [
        'Java 17', 
        'Spring Boot', 
        'Microservices', 
        'REST/SOAP services', 
        'MSSQL', 
        'MySQL', 
        'NoSQL', 
        'XML/JSON/XSLT', 
        'Tomcat', 
        'Data Structures and Algorithms', 
        'Event-driven (Kafka)'
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        'Angular 18', 
        'TypeScript', 
        'JavaScript', 
        'HTML5', 
        'SCSS/CSS/LESS', 
        'Angular Material', 
        'Bootstrap CSS'
      ]
    },
    {
      category: 'Testing & Tools',
      technologies: [
        'JUnit/Mockito', 
        'Jasmine', 
        'Selenium', 
        'Postman', 
        'Swagger'
      ]
    },
    {
      category: 'Version Control & CI/CD',
      technologies: [
        'Git/SVN', 
        'Bitbucket/GitHub', 
        'SourceTree', 
        'Maven/Gradle', 
        'Jenkins'
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        'AWS (S3, Lambda, etc.)', 
        'Sumologic', 
        'New Relic', 
        'Docker', 
        'Terraform'
      ]
    },
    {
      category: 'IDEs & Editors',
      technologies: [
        'VS Code', 
        'IntelliJ/Eclipse', 
        'Notepad++', 
        'Oxygen', 
        'Toad'
      ]
    },
    {
      category: 'Project Management & Collaboration',
      technologies: [
        'Confluence', 
        'Jira', 
        'Teams', 
        'Slack', 
        'Trello', 
        'Figma', 
        'Miro', 
        'Lucidchart'
      ]
    }
  ];
}
