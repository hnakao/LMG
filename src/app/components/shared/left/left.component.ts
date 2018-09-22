import { Component, OnInit, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { LeftService, MockDate } from '../../../services/left.service';
import { MonthComponent } from '../../month/month.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  mockDate: MockDate[] = [];
  @ViewChildren(MonthComponent) months: QueryList<MonthComponent>
  monthsObj: any[] = [];

  @Output() notifyShow: EventEmitter<any> = new EventEmitter();

  constructor( private _leftService: LeftService ) { }

  ngOnInit() {

    this.mockDate = this._leftService.getMockDate();

  }

  unselectOthers( monthId ) {
    this.notifyShowPanel();
    this.months.forEach(month => {
      if( monthId != month.getId() ) {
        month.unselect();
      }
    });
  }

  notifyShowPanel(){
    this.notifyShow.emit("left");
  }

}
