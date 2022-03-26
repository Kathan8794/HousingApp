import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
   public propertyId : any;
  constructor(public route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(
      (param)=>{
        this.propertyId = Number(param['id']);
      }
    )
  }
  onSelectNext(){
    this.propertyId = this.propertyId +1;
    this.router.navigate(['property-detail',this.propertyId])
  }
}
