import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public property : IProperty;
  propertyArr : any[] =[];
  id:any;
  constructor() { }

    ngOnInit() {
      this.propertyArr.push(this.property)
     this.propertyArr[0].forEach((element: any) => {
       this.id = element.id
     });
    }

}
