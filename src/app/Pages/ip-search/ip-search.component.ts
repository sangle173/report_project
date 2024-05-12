import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrl: './ip-search.component.scss'
})
export class IpSearchComponent {
  ip_address: string = 'No result';

  showIpAddress() {
    return this.ip_address;
  }

  constructor() { }

  ngOnInit(): void {
  }

  search(value: any) {
    console.log(value);
    this.ip_address = value;
  }
}
