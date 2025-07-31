
import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnChanges {
  @Input() contact: any;
  email_data: any;

  constructor(private contactService: ContactService) { }

  ngOnChanges() {

    if (this.contact?.id) {
      this.contactService.getEmails(this.contact.id).subscribe((data) => {
        this.email_data = data;

      });
    }
  }

}
