import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {

  constructor(private http: HttpClient) {
   }

   getTestArticles(input) {
    const configUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input}&origin=*&utf8=&format=json`
    return this.http.get(configUrl);
    
   }
}
