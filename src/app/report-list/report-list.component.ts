import { Component, OnInit } from '@angular/core';
import { ReportserviceService } from '../shared/reportservice.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  constructor(public service: ReportserviceService) { }

  ngOnInit(): void {
  }

  populateAppointmentList(id: number)
  {
    this.service.getAppointmentListByPractitionerId(id);
  }

}
