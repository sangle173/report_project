import { Component } from '@angular/core';
import {Report} from "../report";
import {ReportService} from "../../../Services/report.service";
import {SheetService} from "../../../Services/sheet.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  reports!: Report[];
  isLoading: boolean = false;
  loadingTitle!: string;
  data: any = [];

  constructor(private reportService: ReportService,private service: SheetService){}
  ngOnInit(): void{
    this.getReports();
  }

  getReports() {
    this.listData();
  }

  listData() {
    this.service.listSheet().subscribe({
      next: (res: any) => {
        console.log(res);
        this.data = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
