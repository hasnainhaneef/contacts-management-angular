import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  contacts: any[] = [];
  filteredContacts: any[] = [];
  searchTerm: string = '';
  @Output() contactSelected = new EventEmitter<any>();
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
      this.filteredContacts = data; 
    });
  }

  selectContact(contact: any) {
    this.contactSelected.emit(contact);
  }

  onSearchChange() {
    if (!this.searchTerm.trim()) {
      this.filteredContacts = this.contacts;
      return;
    }

    const searchLower = this.searchTerm.toLowerCase().trim();
    this.filteredContacts = this.contacts.filter(contact => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      const designation = contact.designation?.toLowerCase() || '';
      const email = contact.email?.toLowerCase() || '';
      
      return fullName.includes(searchLower) || 
             designation.includes(searchLower) || 
             email.includes(searchLower);
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredContacts = this.contacts;
  }
}
