import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  hideHeading = input(false);

  contactInfo = [
    {
      label: 'Email',
      value: 'sabarish00@yahoo.in',
      href: 'mailto:sabarish00@yahoo.in',
      icon: 'bi bi-envelope',
      type: 'link'
    },
    {
      label: 'Phone',
      value: '(+49) 15563023180',
      href: 'tel:+4915563023180',
      icon: 'bi bi-phone',
      type: 'link'
    },
    {
      label: 'Phone - Secondary',
      value: '(+49) 15510586383',
      href: 'tel:+4915510586383',
      icon: 'bi bi-telephone',
      type: 'link'
    },
    {
      label: 'Location',
      value: 'Berlin, Germany',
      href: '',
      icon: 'bi bi-geo-alt',
      type: 'text'
    }
  ];
}
