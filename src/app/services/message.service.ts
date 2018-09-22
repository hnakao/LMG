import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private mockMessage: ContentMessage[] =  [
    {
      content: "Remboursemen non conforme",
      timestamp: null,
      avatar: "../../assets/img/05.png"
    },
    {
      content: "Remboursemen non conforme",
      timestamp: null,
      avatar: "../../assets/img/01.png"
    }
  ];

  constructor() { }

  getContentMessage():ContentMessage[]{

    this.mockMessage.forEach(item => {
      item.timestamp = new Date();
    });

    return this.mockMessage;

  }
}

export interface ContentMessage{
  content:string;
  timestamp:Date;
  avatar:string;
}
