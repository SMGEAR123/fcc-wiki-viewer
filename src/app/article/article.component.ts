import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('content') content: {};
  // @Input('title') title: string;
  // @Input('description') description: string;
  // @Input('link') link: string;

  constructor() {
   }

  ngOnInit() {
    
  }

}
