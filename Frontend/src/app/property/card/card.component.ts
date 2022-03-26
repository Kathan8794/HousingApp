import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public property: IProperty;

  constructor() {}

  ngOnInit() {

  }
}
