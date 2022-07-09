import { Component, OnInit,} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  
  coin_symbol:string = "";
  time_interval:string = "";

  ngOnInit(): void {
  }

  getVals(coin_val:string, value_interval:string) {
    this.coin_symbol = coin_val;
    this.time_interval = value_interval;
  }

  clickMe() {
    setTimeout(() => {
      this.sharedService.sendClickEvent();
    }, 1)
  }
}
