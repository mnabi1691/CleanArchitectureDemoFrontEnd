import { Component, OnInit } from '@angular/core';
import { ReportserviceService } from '../shared/reportservice.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  constructor(public service: ReportserviceService) { }

  ngOnInit(): void {
  }

}
