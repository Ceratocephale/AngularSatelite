import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { satelite } from 'src/app/shared/models/satelite';

@Injectable({
  providedIn: 'root'
})
export class SateliteService {

  constructor(private _http:HttpClient) {
    
   }

   getData(){    
    const headers = {
   //   'Aut'
    }
    this._http.get('uphere-space1.p.rapidapi.com').subscribe({
      next: satelite => {
        
      }
    });
   }


   
}
