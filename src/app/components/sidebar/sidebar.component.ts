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
  isSidebarActive = true;
  isContactInfoVisible = false;
  // innerWidth;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  //   console.log("innerWidth", this.innerWidth);
  // }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleContactInfo() {
    this.isContactInfoVisible = !this.isContactInfoVisible;
  }
}
