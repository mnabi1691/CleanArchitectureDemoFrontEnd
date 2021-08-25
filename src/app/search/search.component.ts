import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportserviceService } from '../shared/reportservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ddlPractitioner: number;

  constructor(public service: ReportserviceService) { }

  ngOnInit(): void {
    this.service.selectedValue = null;
    this.service.getSelectItems();
    this.ddlPractitioner = 0;
  }

  onSubmit(form: NgForm)
  {
    console.log("Prac:" + this.ddlPractitioner);
    
    this.service.selectedValue = this.ddlPractitioner;
    this.service.getReportList();
  }

  reset()
  {
    this.service.startdate = new Date();
    this.service.endDate = new Date();
    this.ddlPractitioner = 0;
    this.service.report = null;
    this.service.formData = null;
    this.service.appointmentList = null;
  }

}
