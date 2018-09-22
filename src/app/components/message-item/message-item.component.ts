import { Component, OnInit } from '@angular/core';
import { MessageService, ContentMessage } from '../../services/message.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  message :ContentMessage[] = [];

  constructor(private _messageService: MessageService) { }

  ngOnInit() {

    this.message = this._messageService.getContentMessage();

  }

}
