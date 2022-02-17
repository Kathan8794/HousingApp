import { Component } from "@angular/core";

@Component({
  selector:'app-proprty-card',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{

Property : any={
  "Id":1,
  "Type" : "MyHouse",
  "Name": "Birla House",
  "Price":12000
}

}
