import {Component} from '@angular/core';
import {Report} from "../report";
import {ReportService} from "../../../Services/report.service";
import jp from 'jsonpath';
import {formatDate} from "@angular/common";
import {SheetService} from "../../../Services/sheet.service";

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss'
})
export class GenerateReportComponent {
  reports!: any;
  isLoading: boolean = false;
  loadingTitle!: string;
  subject: string = '';
  dataList: any = [
    {
      "name": "1 - Initial Configuration",
      "display": "Initial Configuration",
      "color": "#DCE6F1",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "2 - App Core",
      "display": "App Core",
      "color": "#F2DCDB",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "3 - Content Everywhere",
      "display": "Content Everywhere",
      "color": "#EBF1DE",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "4 - Content Experience",
      "display": "Content Experience",
      "color": "#E4DFEC",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": {},
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "5 - Continuous Configuration",
      "display": "Continuous Configuration",
      "color": "#DAEEF3",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "6 - Playback Control",
      "display": "Playback Control",
      "color": "#FDE9D9",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    },
    {
      "name": "9 - Pinewood",
      "display": "Pinewood",
      "color": "#F4B083",
      "testing_request_done": {
        "name": "Testing request",
        "status": "Done",
        "data": [],
        "no": 0
      },
      "testing_request_inprogress": {
        "name": "Testing request",
        "status": "In-progress",
        "data": [],
        "no": 0
      },
      "bug_found": {
        "name": "Bug found",
        "status": "Open",
        "data": [],
        "no": 0
      }
    }
  ]
  date: any;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  cc = "huy.quoc.tran@agest.vn; vien.do@agest.vn; tonyl@logigear.com; doug.wilson@logigear.com; canh.tran@agest.vn; tuong.vo@agest.vn; nhi.thuc.nguyen@agest.vn; tai.ngo@agest.vn; tai.le@agest.vn; duy.khuong.phan@agest.vn; thanh.dang@agest.vn; sang.le@agest.vn; vuong.bui@agest.vn; nhan.thi.tran@agest.vn; hung.ngo@agest.vn; hieu.ngoc.dang@agest.vn"

  constructor(private reportService: ReportService, private service: SheetService) {
  }

  ngOnInit(): void {
    this.getReports();
    this.date = new Date();
    this.subject = "[AGEST][SONOS] Daily Status Report - " + this.days[this.date.getDay()] + ", " + formatDate(this.date, 'MMMM dd, yyyy', "en-US");
    console.log(this.subject);
  }

  getReports() {
    this.loadingTitle = "loading report ...";
    this.isLoading = true;
    let today = formatDate(new Date(), 'd-MMM-yyyy', "en-US")
    this.service.listSheet().subscribe((data: any) => {
      this.reports = data;
      for (let i = 0; i <data.length ; i++) {
        if(data[i][0] !== undefined) {
          this.reports[i]['date'] = data[i][0];
        } else {
          this.reports[i]['date'] = data[i]['                 '];
        }
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
      console.log(this.reports);
      for (let i = 0; i <this.dataList.length ; i++) {
        if (jp.query(this.reports, `$[?(@.team== "${this.dataList[i].name}" && @.date== "${today}")]`)){
          let testing_request_done = jp.query(this.reports, `$[?(@.team== "${this.dataList[i].name}" && @.date== "${today}" && @.action== "Testing request" && @.working_status== "Done")]`);
          if (testing_request_done) {
            this.dataList[i]['testing_request_done']['data'] = testing_request_done;
            this.dataList[i]['testing_request_done']['no'] = testing_request_done.length;
          }
          let testing_request_inprogress = jp.query(this.reports, `$[?(@.team== "${this.dataList[i].name}" && @.date== "${today}" && @.action== "Testing request" && @.working_status== "In-progress")]`);

          if (testing_request_inprogress) {
            this.dataList[i]['testing_request_inprogress']['data'] = testing_request_inprogress;
            this.dataList[i]['testing_request_inprogress']['no'] = testing_request_inprogress.length;
          }

          let bug_found = jp.query(this.reports, `$[?(@.team== "${this.dataList[i].name}" && @.date== "${today}" && @.action== "Bug found")]`);

          if (bug_found) {
            this.dataList[i]['bug_found']['data'] = bug_found;
            this.dataList[i]['bug_found']['no'] = bug_found.length;
          }
        }
      }
      this.isLoading = false;
    });
  }
}
