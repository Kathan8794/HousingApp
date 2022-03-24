import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: any = [];
        for (const Id in data) {
          if (data.hasOwnProperty(Id)) {
            propertiesArray.push(data as IProperty);
          }
        }
        return propertiesArray;
      })
    );
  }
}
