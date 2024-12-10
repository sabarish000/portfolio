import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, ContactComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isContactInfoVisible = true;

  toggleContactInfo() {
    this.isContactInfoVisible = !this.isContactInfoVisible;
  }
}
