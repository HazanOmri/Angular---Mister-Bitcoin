import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
  rate!: Number
  user = this.userService.getUser()


  async ngOnInit() {
    this.rate = await this.bitcoinService.getRate()
    this.userService.login({
      _id: 'u101',
      name: "Omri Hazan",
      coins: 100,
      moves: []
    })
  }

}