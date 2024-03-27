import { Component } from '@angular/core';
import {Report} from "../report";
import {ReportService} from "../../../Services/report.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  reports!: Report[];
  isLoading: boolean = false;
  loadingTitle!: string;

  constructor(private reportService: ReportService){}
  ngOnInit(): void{
    this.getReports();
  }

  getReports() {
    this.loadingTitle = "loading report ...";
    this.isLoading = true;
    this.reportService.getReports().subscribe((data) => {
      this.reports = data;
      this.isLoading = false;
    });
  }
}
