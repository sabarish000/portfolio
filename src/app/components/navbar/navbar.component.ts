import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ExperienceComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
