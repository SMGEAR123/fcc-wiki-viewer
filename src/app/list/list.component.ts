import { Component, OnInit, Input } from '@angular/core';
import { WikiSearchService } from '../shared/wiki-search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // articles: any[] = [{title: 'Mobile Suit Gundam', description: 'Giant Robots WOOOO!', link: '#'}, {title: 'Zeta Gundam', description: 'More Giant Robots WOOO!', link: '#' }, {title: 'Gundam Seed' , description: 'Too many lazers AGHGHAKLDJFALJFA!', link: '#'}];
  $articles: any[];

  constructor(private wiki: WikiSearchService) { }

  ngOnInit() {
    console.log(this.$articles);
  }

  getInput(e) {
    let query = e.target.value;
    // console.log(query);
    this.wiki.getTestArticles(query).subscribe((data) => {
      let queryObj = data;
      console.log(queryObj.query.search);
      let queryArray = queryObj.query.search;
      this.$articles = queryArray;
    });
  }
  
}
