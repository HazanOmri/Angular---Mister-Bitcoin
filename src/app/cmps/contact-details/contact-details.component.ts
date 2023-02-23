import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move, User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  contact!: Contact
  subscription!: Subscription
  amount!: number
  user!: User
  moves!: Move[]

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
    this.updateMoves()
  }

  updateMoves() {
    this.user = this.userService.getUser()
    this.moves = this.user.moves.filter(move => move.toId === this.contact._id)
}

  onTransfer() {
    this.userService.addMove(this.contact, this.amount)
    // this.user = this.userService.getUser()
    this.amount = 0
    this.updateMoves()
  }
}
