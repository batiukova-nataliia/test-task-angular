import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from './spaceflight-news.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsService], // there were no providers before
})
export class AppComponent {
  title = 'test-task-angular';
  myData: any;
  searchInput = '';
  visibleNews: any;
  state = false;
  articleText: any;
  articleTitle: any;
  articleImg: any;
  goFullArticle: any;
  // showHomePage: boolean = true;


  // setFullArticle = (newsId: number) => {
  //   const selectedItem = this.visibleNews.results.find((item: { id: number; }) => item.id === newsId);

  //   if (selectedItem) {
  //     // Set the found item as the currentItem
  //     this.currentItem = selectedItem;
  //   }
  // }

  // setFullArticle = (newsId: number) => {
  //   const selectedItem = this.visibleNews.results.find((item: { id: number; }) => item.id === newsId);
  //   return selectedItem;
  // }

  // setFullArticle = (newsId: number) => {
  //   this.currentItem = this.visibleNews.results.find((item: { id: number; }) => item.id === newsId);
  // }

  // setFullArticle = (newsId: number) => {
  //   const selectedItem = this.visibleNews.find((item: { id: number; }) => item.id === newsId);
  //   if (selectedItem) {
  //     this.currentItem = selectedItem.summary;
  //   }
  // }

  setArticleImg = (newsId: number) => {
    const selectedItem = this.visibleNews.find((item: { id: number; }) => item.id === newsId);
    if (selectedItem) {
      this.articleImg = selectedItem.image_url;
    }
  }

  setArticleTitle = (newsId: number) => {
    const selectedItem = this.visibleNews.find((item: { id: number; }) => item.id === newsId);
    if (selectedItem) {
      this.articleTitle = selectedItem.title;
    }
  }


  setFullArticle = (newsId: number) => {
    const selectedItem = this.visibleNews.find((item: { id: number; }) => item.id === newsId);
    if (selectedItem) {
      this.articleText = selectedItem.summary;
    }
  }




  reduceSummary = function reduceSummary(summary: string) {
    const maxLength = 100;
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
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute, //+
    private router: Router,
    private newsService2: NewsService,
  ) {

    this.visibleNews = [];
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Get the current URL
    //     const currentUrl = event.urlAfterRedirects;

    //     // Check if the URL contains '/full-article/'
    //     if (currentUrl.includes('/full-article/')) {
    //       this.showHomePage = false;
    //     } else {
    //       this.showHomePage = true;
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    this.newsService.getDataSecond().subscribe((data) => {
      this.myData = data;
      this.visibleNews = this.myData.results;
      // this.setFullArticle(20252); //+
      console.log(this.visibleNews);
      // this.currentItem = this.visibleNews[0].summary;
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

  loadFullArticle(url: string, summary: string) {
    this.router.navigateByUrl('/full-article', { state: { articleSummary: summary } });
  }


  navigateToFullArticle(article: any) {
    this.router.navigateByUrl('/full-article', { state: { article } });
  }

  // loadFullArticle(url: string) {
  //   this.http.get<any>(url).subscribe(data => {
  //     this.router.navigateByUrl('/full-article', { state: { articleContent: data.content } });
  //   });
  // }

  // loadFullArticle(url: string) {
  //   this.http.get<any>(url).subscribe((data) => {
  //     // Extract the article content
  //     const articleContent = data?.content ?? '';
  //     // Navigate to the FullArticleComponent and pass the article content in the state
  //     this.router.navigateByUrl('/full-article', { state: { articleContent } });
  //   });
  // }


  // loadFullArticle(url: string) {
  //   this.http.get(url, { responseType: 'text' }).subscribe((htmlContent) => {
  //     // Sanitize the HTML content to avoid security risks (optional but recommended)
  //     const sanitizedContent: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(htmlContent);

  //     // Now you can extract the specific text you need from the sanitized content
  //     // const articleText = this.extractTextFromHtml(sanitizedContent);
  //     // console.log(articleText);
  //   });
  // }

  // This method can be used to extract the specific text you need from the HTML content
  // extractTextFromHtml(html: SafeHtml): string {
  //   // Use DOM manipulation or other methods to extract the specific text you need
  //   // For example, you can use DOMParser or ElementRef to parse the HTML and extract the text.
  //   // However, keep in mind that this process can be complex and may depend on the specific structure of the external webpage.
  //   // In your example link (https://www.teslarati.com/spacex-set-for-launch-of-the-intelsat-communications-satellite/),
  //   // you'll need to inspect the HTML structure and identify the relevant element containing the article text.

  //   // For demonstration purposes, let's assume the article text is inside a <div> with class "article-content"
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html.toString(), 'text/html');
  //   const articleDiv = doc.querySelector('p');
  //   if (articleDiv) {
  //     return articleDiv.textContent || '';
  //   } else {
  //     return '';
  //   }
  // }

}
function goHome() {
  throw new Error('Function not implemented.');
}

