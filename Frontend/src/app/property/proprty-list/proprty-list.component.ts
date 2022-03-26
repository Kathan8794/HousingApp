import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/sevices/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-proprty-list',
  templateUrl: './proprty-list.component.html',
  styleUrls: ['./proprty-list.component.css']
})
export class ProprtyListComponent implements OnInit {
  sellRent = 1;
  public properties: IProperty[];
  constructor(private route :ActivatedRoute,private housingService : HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent =2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(res=>{
      this.properties = res;
    })
  }

}
