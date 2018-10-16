import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(e) {
    e.preventDefault();
    /* Prevents page refresh and retrieves input value */
    let query = e.srcElement[0].value;
    console.log(query);
    e.srcElement[0].value = "";
  }

}
