import { Component, OnInit } from '@angular/core';
import { EventsService, AlertService } from '../../services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEvents: any;
  constructor(private eventService: EventsService,
              private AlertService: AlertService) { }

  ngOnInit(): void {
    //this.AlertService.loading(true, false);
    this.eventService.getEvents() 
    .subscribe(item => {
      if(item.data) {
      //  this.AlertService.loading(false, false);
        this.allEvents = item.data;
        console.log(this.allEvents)
      }
    },
    error => {
    })
  }

}
