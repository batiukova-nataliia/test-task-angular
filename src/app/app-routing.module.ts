import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullArticleComponent } from './full-article/full-article.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: "full-article/:id", component: FullArticleComponent},
  { path: '', component: MainPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
