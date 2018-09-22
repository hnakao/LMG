import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  private mockData: Mock [][] = [
  [
      {
        date: "19 juin 2018",
        descp: "Remboursemen non conforme",
        color: "yellow"
      },
      {
        date: "2 juin 2018",
        descp: "Remboursemen non conforme",
        color: "orange"
      }
    ],
    [
      {
        date: "3 mai 2018",
        descp: "Arret maladie",
        color: "green"
      },
      {
        date: "2 mai 2018",
        descp: "Changement d'adresse",
        color: "green"
      }
    ],
    [
      {
        date: "3 avril 2018",
        descp: "Arret maladie",
        color: "green"
      },
      {
        date: "2 avril 2018",
        descp: "Changement d'adresse",
        color: "green"
      }
    ]
];

  constructor() { }

  getMockData( pos: number ): Mock[]{

    return this.mockData[pos];

  }
}


export interface Mock {

  date: string;
  descp: string;
  color:string;

}
