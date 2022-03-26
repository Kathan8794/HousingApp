import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HousingService {

  constructor(private http: HttpClient) {}

  getAllProperties(sellRent : number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray :Array<IProperty> = [];
        const id = 'id';
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
