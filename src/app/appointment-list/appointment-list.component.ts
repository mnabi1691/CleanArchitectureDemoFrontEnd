import { Component, OnInit } from '@angular/core';
import { ReportserviceService } from '../shared/reportservice.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(public service: ReportserviceService) { }

  ngOnInit(): void {
  }

  populateAppointmentDetails(id:any)
  {
    this.service.getAppointmentDetails(id);
  }

}
