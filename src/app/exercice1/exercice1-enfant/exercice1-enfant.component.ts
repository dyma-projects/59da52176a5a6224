import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() compteurChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public compteurIncrement(value: number): void {
    this.compteurChange.emit(value);
  }

}
