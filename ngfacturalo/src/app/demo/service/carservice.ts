import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../domain/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/demo/data/cars-small.json')
                    .toPromise()
                    .then(res => res.data as Car[])
                    .then(data => data);
    }

    getCarsMedium() {
        return this.http.get<any>('assets/demo/data/cars-medium.json')
                    .toPromise()
                    .then(res => res.data as Car[])
                    .then(data => data);
    }

    getCarsLarge() {
        return this.http.get<any>('assets/demo/data/cars-large.json')
                    .toPromise()
                    .then(res => res.data as Car[])
                    .then(data => data);
    }

    getCarsByDate(fecha1:string ,fecha2 :string,cliente?:string,id?:number){
        console.log(fecha1,fecha2);
        let url = 'assets/demo/data/cars-large.json' + '/' + fecha1  + '/' +fecha2  ;
        console.log(url);
        
        return this.http.get<any>(url);
    }
}
