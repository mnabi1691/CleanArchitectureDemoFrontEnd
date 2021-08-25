import { PractitionerReportListDto } from "./practitioner-report-list-dto.model";

export class ReportDto {
    practitionerId: number;
    practitionerName: string;
    reportList: PractitionerReportListDto[]
}
