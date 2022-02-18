import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprty-list',
  templateUrl: './proprty-list.component.html',
  styleUrls: ['./proprty-list.component.css']
})
export class ProprtyListComponent implements OnInit {

  properties : Array<any>=
  [{
    "Id":1,
    "Type" : "Appartment",
    "Name": "Birla Appartment",
    "Price":12000
  },
  {
    "Id":2,
    "Type" : "Bunglow",
    "Name": "Aditya Bunglow",
    "Price":15000
  },
  {
    "Id":3,
    "Type" : "Ternamant",
    "Name": "Jay House",
    "Price":17000
  },
  {
    "Id":4,
    "Type" : "Duplex",
    "Name": "Hari om Duplex",
    "Price":18000
  },
  {
    "Id":5,
    "Type" : "Flat",
    "Name": "Parth House",
    "Price":12000
  },
  {
    "Id":6,
    "Type" : "House",
    "Name": "Nutan Club House",
    "Price":9000
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
