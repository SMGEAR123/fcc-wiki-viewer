import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articles: any[] = [{title: 'Mobile Suit Gundam', description: 'Giant Robots WOOOO!', link: '#'}, {title: 'Zeta Gundam', description: 'More Giant Robots WOOO!', link: '#' }, {title: 'Gundam Seed' , description: 'Too many lazers AGHGHAKLDJFALJFA!', link: '#'}];
  
  constructor() { }

  ngOnInit() {
    console.log(this.articles);
  }
  
}
