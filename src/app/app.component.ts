// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ContactDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedContact: any;

  onContactSelected(contact: any) {
    this.selectedContact = contact;
  }
}
