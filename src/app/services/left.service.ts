import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftService {

  private mockDate: MockDate[] = [
    {
      id: 0,
      date: "JUIN 2018"
    },
    {
      id: 1,
      date: "MAI 2018"
    },
    {
      id: 2,
      date: "AVRIL 2018"
    }
  ];

  constructor() { }

  getMockDate(): MockDate[]{

    return this.mockDate;

  }



}

export interface MockDate{

  id: number;
  date: string;

}
