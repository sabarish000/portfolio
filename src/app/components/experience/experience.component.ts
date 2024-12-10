import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeTabIndex = 0;
  experiences = [
    {
      title: 'Senior Full-stack Engineer',
      company: {
        name: 'Genesys',
        website: 'https://www.genesys.com/',
        description: 'AI powered CX(Cloud based customer experience and contact center solutions)'
      },
      duration: 'November 2021 - October 2024',
      shortDescription: 'Developed scalable RESTful microservices and modernized single-page Angular applications, driving performance improvements and proactive issue detection.',
      keyPoints: [
        'Developed RESTful micro-services using Java Spring Boot to ensure high quality, scalability, and maintainability.',
        'Refactored the codebase, reducing memory usage by 30% and increasing processing speed by 25%.',
        'Engineered Angular single-page applications, enhancing maintenance and modularity.',
        'Led the upgrade of Angular applications from v9 to v13, resulting in a 20% performance improvement.',
        'Streamlined maintenance with TS-lint & Prettier integration for clean and consistent code.',
        'Collaborated with cross-functional teams, business consultants, and UX designers to align requirements with development efforts.',
        'Utilized JUnit, Jasmine framework for unit testing, and Selenium for acceptance testing of the web application.',
        'Involved in all stages of software delivery, from backlog grooming and coding to testing, reviews, deployment, and retrospectives.',
      ],
      achievements: 'Received commendation for setting up real-time monitoring and alerting for micro-services using New Relic, enabling proactive issue detection and resolution. Conducting a thorough analysis of WYSIWYG editors and successfully migrated the existing editor to a 3 times more feature-rich, cost-effective alternative.'
    },
    {
      title: 'Senior Developer',
      company: {
        name: 'Planon',
        website: 'https://planonsoftware.com/uk/',
        description: 'IWMS (Integrated Workplace Management Solutions for smart, sustainable building management)'
      },
      duration: 'November 2017 - November 2021',
      shortDescription: 'Enhanced API integrations, optimized query performance, and enabled offline functionality for Planon’s client-facing applications.',
      keyPoints: [
        'Implemented seamless integrations between client ERP systems and Planon using REST & SOAP web services with Apache Axis2.',
        'Gathered and analyzed requirements to ensure clear technical documentation and production support.',
        'Participated in production support activities like deployment, software integration, change request handling, and bug fixes.',
        'Designed and optimized MS SQL database, resulting in improved data retrieval and management.',
        'Enhanced API to support offline functionality, increasing the efficiency and usability of client-facing applications.',
        'Integrated new features into Angular applications to meet specific client requirements, enhancing user satisfaction.'
      ],
      achievements: 'Received commendation for setting up real-time monitoring and alerting for micro-services using New Relic, enabling proactive issue detection and resolution. Conducting a thorough analysis of WYSIWYG editors and successfully migrated the existing editor to a 3 times more feature-rich, cost-effective alternative.'
    },
    {
      title: 'Software Engineer',
      company: {
        name: 'Infosys',
        website: 'https://www.infosys.com/',
        description: 'Worked for a financial product which manages 401(k) retirement plans'
      },
      duration: 'March 2013 - November 2017',
      description: 'Built and tested core Java applications, automated daily reports, and supported agile development for business-critical projects.',
      keyPoints: [
        'Developed core Java and Groovy applications, creating unit and integration tests using JUnit and Mockito.',
        'Worked with MySQL to design, optimize, and manage database interactions.',
        'Peer-reviewed technical design documents and code for quality assurance.',
        'Conducted post-release activity analysis to prevent defects and optimize processes.',
        'Facilitated retrospective meetings to assess project performance and identify opportunities for improvement.',
        'Followed agile methodology to report daily status and prepared weekly status reports for project stakeholders.',
      ],
      achievements: 'Developed a Java-based script to automate the generation of daily status reports, significantly reducing manual effort and improving accuracy. Honored with the Star Performer Award for outstanding contributions to the team'
    }
  ];

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}
