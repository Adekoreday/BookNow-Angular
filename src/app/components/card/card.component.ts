import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../models'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() Event: Event;
  constructor() { }

  ngOnInit(): void {
  }

  bookEvent() {
    console.log(this.Event.name, 'is now booked' );
  }

}
