import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FullArticleComponent } from './full-article/full-article.component';
import { NewsService } from './news.service';


// const routes: Routes = [
//   { path: '', redirectTo: '/news', pathMatch: 'full' }, // Set your default route here if needed
//   // { path: 'full-article/:id', component: FullArticleComponent }
//   { path: 'full-article', component: FullArticleComponent }

// ];


@NgModule({
  declarations: [
    AppComponent,
    FullArticleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes), // -
  ],
  providers: [NewsService], // was empty array before
  bootstrap: [AppComponent]
})
export class AppModule { }
