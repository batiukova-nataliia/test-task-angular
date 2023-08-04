import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  myData: any;
  searchInput = '';
  visibleNews: any;
  state = false;
  articleText: any;
  articleTitle: any;
  articleImg: any;

  reduceContent = function reduceContent(summary: string, maxLength: number) {
    const result = summary.length > maxLength ? summary.substring(0, maxLength) + '...' : summary;
    return result;
  }

  formatDate = function formatDate(dateString: string) {
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let daySuffix;
    if (day >= 11 && day <= 13) {
      daySuffix = "th";
    } else if (day % 10 === 1) {
      daySuffix = "st";
    } else if (day % 10 === 2) {
      daySuffix = "nd";
    } else if (day % 10 === 3) {
      daySuffix = "rd";
    } else {
      daySuffix = "th";
    }

    const formattedDate = `${month} ${day}${daySuffix}, ${year}`;
    return formattedDate;
  }

  constructor(
    private newsService: SpaceflightNewsService,
    private router: Router,
  ) {

    this.visibleNews = [];

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        if (!currentUrl.includes('/full-article/')) {
          this.articleText = '';
          this.articleTitle = '';
          this.articleImg = '';
        }
      }
    }); 
  }

  ngOnInit(): void {
    this.newsService.getDataSecond().subscribe((data) => {
      this.myData = data;
      this.visibleNews = this.myData.results;
      console.log(this.visibleNews);
    })
  }

  applyFilter() {
    this.visibleNews = this.myData.results.filter((item: any) =>
      item.title.toLowerCase().includes(this.searchInput.toLowerCase())
      || item.summary.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    console.log(this.visibleNews);
    this.state = !this.state;
  }

  highlightText(text: string): string {
    const lowerSearchInput = this.searchInput.toLowerCase();
    return text.replace(new RegExp(lowerSearchInput, 'gi'), (match) => `<span class="highlight">${match}</span>`);
  }
  navigateToFullArticle(article: any) {
    this.router.navigateByUrl(`/full-article/${article.id}`, {
      state: { title: article.title, text: article.summary, img: article.image_url }
    });
  }
}
