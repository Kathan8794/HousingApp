import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/sevices/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-proprty-list',
  templateUrl: './proprty-list.component.html',
  styleUrls: ['./proprty-list.component.css']
})
export class ProprtyListComponent implements OnInit {

  public properties: Array<IProperty> = [];
  constructor(private housingService : HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(res=>{
      this.properties = res;
    })
  }

}
