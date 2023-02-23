import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact
  constructor(private contactService: ContactService) { }

  onRemove(contactId: string | undefined) {
    try {
      this.contactService.deleteContact(contactId as string)
    } catch (err) {
      console.error(err)
    }
  }
}
