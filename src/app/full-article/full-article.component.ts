import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit{
  // articleId: number = 0;
  // articleContent: string = '';
  article: any;
  articleId: any;

  // showFullArticle: boolean = false;

  @Input() title = '';
  @Input() text = '';
  @Input() img = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Get the current URL
    //     const currentUrl = event.urlAfterRedirects;

    //     // Check if the URL contains '/full-article/'
    //     if (currentUrl.includes('/full-article/')) {
    //       this.showFullArticle = true;
    //     } else {
    //       this.showFullArticle = false;
    //     }
    //   }
    // });
  }
  

  ngOnInit(): void {
    // Get the value of the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.articleId = params.get('id');
      // You can use this.articleId to fetch the article data based on the ID
    });
  }

  // ngOnInit(): void {
  //   // Access the article content from the state
  //   const state = this.router.getCurrentNavigation()?.extras.state;
  //   this.article = state?.['props'] || null;
  // } // it worked

    // ngOnInit(): void {
  //   const state = this.router.getCurrentNavigation()?.extras.state;
  //   this.articleContent = state?.['articleContent'] || '';
  // }

  // ngOnInit(): void {
  //   const state = this.router.getCurrentNavigation()?.extras.state;
  //   this.props = state?.['props'] || null;
  // }



  // ngOnInit(): void {
  //   // Get the 'id' parameter from the route
  //   this.route.paramMap.subscribe(params => {
  //     this.articleId = parseInt(params.get('id') || '', 10);
  //     // Find the specific item from 'visibleNews' array based on the 'id'
  //     this.article = this.visibleNews.find(item => item.id === this.articleId);
  //     // If the 'article' is not found, you can handle it here (e.g., redirect to a different page)
  //     if (!this.article) {
  //       this.router.navigateByUrl('/'); // Redirect to home page or any other route
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.articleId = parseInt(params.get('id') || '', 10);
  //     // Here you can use the articleId to fetch the content from the server based on the item.url
  //     // For simplicity, let's assume the article content is directly fetched from the item.url
  //     this.http.get<any>(`https://api.spaceflightnewsapi.net/v4/articles/${this.articleId}`).subscribe(data => {
  //       this.articleContent = data?.content ?? '';
  //     });
  //   });
  // }

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
  // } //-
}
