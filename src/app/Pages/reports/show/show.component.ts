import {Component} from '@angular/core';
import {Report} from "../report";
import {ReportService} from "../../../Services/report.service";
import {SheetService} from "../../../Services/sheet.service";
import jp from "jsonpath";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  reports!: Report[];
  isLoading: boolean = false;
  loadingTitle!: string;
  dataList: any = [];
  today: any;


  constructor(private reportService: ReportService, private service: SheetService) {
  }

  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this.listData();
    this.today = new Date();
  }

  listData() {
    this.service.listSheet().subscribe({
      next: (res: any) => {
        this.dataList = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }


  search(team: string, tester1: string, type: string) {
    let newDate = formatDate(new Date(), 'd-MMM-yyyy', "en-US");

    if (team === '' && tester1 === '' && type === '') {
      return this.listData();
    } else {
      this.service.listSheet().subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.reports[i]['date'] = data[i][0];
          this.reports[i]['team'] = data[i][1];
          this.reports[i]['action'] = data[i][2];
          this.reports[i]['jira_id'] = data[i][3];
          this.reports[i]['jira_summary'] = data[i][4];
          this.reports[i]['working_status'] = data[i][5];
          this.reports[i]['ticket_status'] = data[i][6];
          this.reports[i]['tester_1'] = data[i][7];
          this.reports[i]['tester_2'] = data[i][8];
          this.reports[i]['tester_3'] = data[i][9];
          this.reports[i]['jira_id_summary'] = data[i][10];
        }
        // if (team !== '' && tester1 === '' && type === ''){
        //   return this.dataList = jp.query(this.reports, `$[?(@.team== "${team}" && @.date== "${newDate}")]`);
        // }

        // if (team !== '' && tester1 === '' && date !== '' && type !== ''){
        //   newDate = formatDate(date, 'd-MMM-yyyy', "en-US");
        //   return this.dataList = jp.query(this.reports, `$[?(@.team== "${team}" && @.date== "${newDate}" && @.action== "${type}")]`);
        // }
        //
        // if (team !== '' && tester1 !== '' && date !== '' && type === ''){
        //   newDate = formatDate(date, 'd-MMM-yyyy', "en-US");
        //   return this.dataList = jp.query(this.reports, `$[?(@.team== "${team}" && @.tester_1== "${tester1}" && @.date== "${newDate}" )]`);
        // }
        //
        // if (team !== '' && tester1 === '' && date === '' && type === ''){
        //   return this.dataList = jp.query(this.reports, `$[?(@.team== "${team}")]`);
        // }
        //
        // if (team !== '' && tester1 === '' && date === '' && type !== ''){
        //   return this.dataList = jp.query(this.reports, `$[?(@.team== "${team}" && @.action== "${type}")]`);
        // }

        //
        // if (team === '' && tester1 !== '' && date !== '' && type === ''){
        //   newDate = formatDate(date, 'd-MMM-yyyy', "en-US");
        //   return this.dataList = jp.query(this.reports, `$[?(@.tester_1== "${tester1}" && @.date== "${newDate}")]`);
        // }
        //
        // if (team === '' && tester1 !== '' && date !== '' && type !== ''){
        //   newDate = formatDate(date, 'd-MMM-yyyy', "en-US");
        //   return this.dataList = jp.query(this.reports, `$[?(@.tester_1== "${tester1}" && @.date== "${newDate}" && @.action== "${type}")]`);
        // }
        //
        // if (team === '' && tester1 !== '' && date === '' && type !== ''){
        //   return this.dataList = jp.query(this.reports, `$[?(@.tester_1== "${tester1}" && @.action== "${type}")]`);
        // }
        //
        // if (team === '' && tester1 === '' && date !== '' && type === ''){
        //   newDate = formatDate(date, 'd-MMM-yyyy', "en-US");
        //   return this.dataList = jp.query(this.reports, `$[?(@.date== "${newDate}")]`);
        // }
      });
    }
  }
}
