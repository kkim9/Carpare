import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  doGETYears(){
    let url="https://www.carqueryapi.com/api/0.3/?&cmd=getYears";
    return this.http.get(url);
  }
  doGETMakes(year){
    let url="https://www.carqueryapi.com/api/0.3/?&cmd=getMakes&year="+year+"";
    return this.http.get(url);
  }
  doGETModels(make, year){
    let url="https://www.carqueryapi.com/api/0.3/?&cmd=getModels&make="+make+"&year="+year;
    return this.http.get(url);
  }

  doGETTrims(model,make,year){
    let url="https://www.carqueryapi.com/api/0.3/?cmd=getTrims&model="+model+"&make="+make+"&year="+year;
       return this.http.get(url);
  }

  doGETModel(model){
    let url="https://www.carqueryapi.com/api/0.3/?&cmd=getModel&model="+model
       return this.http.get(url);
  }


}
