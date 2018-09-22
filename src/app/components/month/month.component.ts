import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonthService, Mock } from '../../services/month.service';
import { MockDate } from '../../services/left.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  contentTooltip: string = "Attente d'elements";
  monthData: Mock[] = [];
  @Input() month: MockDate;
  @Output() notifySelected: EventEmitter<any> = new EventEmitter();

  selected = -1;

  constructor( private _monthService: MonthService ) { }

  ngOnInit() {

    this.monthData = this._monthService.getMockData( this.month.id );

  }

  selectItem(i) {
    this.selected = i;
    this.notifySelectedItem();
  }

  unselect() {
    this.selected = -1;
  }

  getId() {
    return this.month.id;
  }

  notifySelectedItem(){
    this.notifySelected.emit(this.month.id);

  }

}
