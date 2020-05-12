import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AlertService} from '../../services'
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: boolean;
  color = "primary";
  mode: ProgressSpinnerMode = "indeterminate";


  constructor(private alertService: AlertService,
             
              ) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(data => { 
          if(data)this.message = data.text; 
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
