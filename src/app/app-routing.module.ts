import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {CreateNewsComponent} from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
  {path: 'news-list', component: NewsListComponent},
  {path: '', redirectTo: 'news-list', pathMatch : 'full'},
  {path: 'create-news', component: CreateNewsComponent},
  {path: 'update-news/:id', component: UpdateNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
