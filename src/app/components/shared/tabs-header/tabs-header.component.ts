import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tabs-header',
  templateUrl: './tabs-header.component.html',
  styleUrls: ['./tabs-header.component.css']
})
export class TabsHeaderComponent implements OnInit {

  public innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

}
