import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLeft: boolean;
  showRight: boolean;

  constructor() { }

  ngOnInit() {
    this.showLeft = true;
    this.showRight = !this.isMobile();
  }

  showPanel( flag ) {
    if( flag == "left" ){
      this.showRight = true;
      if (this.isMobile()) {
        this.showLeft = false;
      }
    }
    else {
      this.showLeft = true;
      if (this.isMobile()) {
        this.showRight = false;
      }
    }
  }

  isMobile() {
    return window.innerWidth < 576; // poner valor
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if(this.isMobile()) {
        this.showLeft = true;
        this.showRight = false;
      } else {
        this.showLeft = true;
        this.showRight = true;
      }
  }

  notifyShowPanel() {
    this.showPanel('right');
  }

}
