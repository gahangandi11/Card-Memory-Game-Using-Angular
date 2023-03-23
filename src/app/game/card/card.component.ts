import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  @Output() cardClicked = new EventEmitter();

  constructor() { }


  ngOnInit(): void {}

  handleClick(): void {
    this.cardClicked.emit()
  }
}
