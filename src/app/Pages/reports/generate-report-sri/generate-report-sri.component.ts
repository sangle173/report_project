import {Component} from '@angular/core';
import {formatDate} from "@angular/common";
import jp from "jsonpath";
import {ReportService} from "../../../Services/report.service";
import {SheetService} from "../../../Services/sheet.service";

@Component({
  selector: 'app-generate-report-sri',
  templateUrl: './generate-report-sri.component.html',
  styleUrl: './generate-report-sri.component.scss'
})
export class GenerateReportSriComponent {
  reports!: any;
  isLoading: boolean = false;
  loadingTitle!: string;
  subject: string = '';
  reportDataToday!: any;
  date: any;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  cc = "tonyl@logigear.com;doug.wilson@logigear.com;huy.quoc.tran@agest.vn;vien.do@agest.vn; canh.tran@agest.vn; anh.thu.dang@agest.vn; an.duong@agest.vn;my.chu.le@agest.vn;hien.huynh@agest.vn; hieu.trung.tran@agest.vn"

  constructor(private reportService: ReportService, private service: SheetService) {
  }

  ngOnInit(): void {
    this.getReports();
    this.date = new Date();
    this.subject = "[SONOS] - Daily Status Report – " + this.days[this.date.getDay()] + ", " + formatDate(this.date, 'MMMM dd yyyy', "en-US");
    console.log(this.subject);
  }

  getReports() {
    this.loadingTitle = "loading report ...";
    this.isLoading = true;
    let today = formatDate(new Date(), 'M/d/yyyy', "en-US");
    console.log(today);
    this.service.listSheetSri().subscribe((data: any) => {

      this.reports = data;

      for (let i = 0; i < data.length; i++) {
        this.reports[i]['start_date'] = data[i]['Start Date'];
        this.reports[i]['task'] = data[i]['Task'];
        this.reports[i]['ticket'] = data[i]['Ticket'];
        this.reports[i]['jira_summary'] = data[i]['Summary'];
        this.reports[i]['jira_id'] = data[i]['Ticket'];
        this.reports[i]['test_plan'] = data[i]['Test Plan'];
        this.reports[i]['ticket_status'] = data[i]['Ticket Status'];
        this.reports[i]['passed'] = data[i]['Passed TCs'];
        this.reports[i]['failed'] = data[i]['Failed TCs'];
        this.reports[i]['total'] = data[i]['Total TCs'];
        if (data[i]['Email/Sonos ID'] !== null) {
          this.reports[i]['email_sonos_id'] = data[i]['Email/Sonos ID'].split('\n');
        }
        if (data[i]['Browsers'] !== null) {
          this.reports[i]['browser'] = data[i]['Browsers'].split('\n');
        }
        if (data[i]['Players'] !== null) {
          this.reports[i]['player'] = data[i]['Players'].split('\n');
        }
        if (data[i]['Drop Date'] !== null) {
          this.reports[i]['drop_date'] = data[i]['Drop Date'].split('\n');
        }
        if (data[i]['Email'] !== null) {
          this.reports[i]['email'] = data[i]['Email'].split('\n');
        }
        if (data[i]['Build'] !== null) {
          this.reports[i]['build'] = data[i]['Build'].split('\n');
        }
        if (data[i]['Players_1'] !== null) {
          this.reports[i]['player_1'] = data[i]['Players_1'].split('\n');
        }
        if (data[i]['Device'] !== null) {
          this.reports[i]['device'] = data[i]['Device'].split('\n');
        }
      }
      console.log(this.reports);
      this.reportDataToday = jp.query(this.reports, `$[?(@.start_date== "${today}" )]`);
      console.log(this.reportDataToday);
      this.isLoading = false;
    });
  }

}
