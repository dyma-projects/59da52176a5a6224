import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public compteur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public compteurIncrement(value: number): void {
    this.compteur += value;
  }
}
