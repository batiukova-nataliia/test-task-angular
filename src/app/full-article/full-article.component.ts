import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit {
  title = '';
  text = '';
  img = '';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const stateData = history.state;
      this.title = stateData.title;
      this.text = stateData.text;
      this.img = stateData.img;
    });
  }
}
