import { Injectable } from '@angular/core';
import { AppointmentDetailsDto } from './appointment-details-dto.model';
import { AppointmentListDto } from './appointment-list-dto.model';
import { HttpClient } from '@angular/common/http';
import { PractitionerReportListDto } from './practitioner-report-list-dto.model';
import { DatePipe } from '@angular/common';
import { ReportDto } from './report-dto.model';
import { PractionerSelectItemDto } from './practioner-select-item-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ReportserviceService {

  formData: AppointmentDetailsDto;
  readonly rootURL = 'https://localhost:44337/';
  appointmentList: AppointmentListDto[];
  report: ReportDto;
  startdate: Date;
  endDate: Date;
  selectItems: PractionerSelectItemDto[];
  selectedValue: number;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getAppointmentListByPractitionerId(id: any) {
    this.http.get(this.rootURL + 'PractitionerReport/appointmentlist/bypractionerid/' + id)
      .toPromise()
      .then(res => this.appointmentList = res as AppointmentListDto[]);
  }

  getReportList()
  {
    this.http.get(this.rootURL + 'PractitionerReport/' + this.selectedValue + '/'
     + this.datePipe.transform(this.startdate, 'yyyy-MM-dd') + '/' + 
    this.datePipe.transform(this.endDate,'yyyy-MM-dd'))
    .toPromise()
    .then(res => this.report = res as ReportDto);
  }

  getAppointmentDetails(id:any)
  {
    this.http.get(this.rootURL + 'PractitionerReport/appointment/id/' + id)
    .toPromise()
    .then(res => this.formData = res as AppointmentDetailsDto);
  }

  getSelectItems()
  {
    this.http.get(this.rootURL + 'PractitionerReport/practitionerselectitems')
    .toPromise()
    .then(res => this.selectItems = res as PractionerSelectItemDto[]);
  }
}
