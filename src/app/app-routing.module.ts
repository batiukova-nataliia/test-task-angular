import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullArticleComponent } from './full-article/full-article.component';

const routes: Routes = [
  {path: "full-article/:id", component: FullArticleComponent},
  {path: "", redirectTo: "/news", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
