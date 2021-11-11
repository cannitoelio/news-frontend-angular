import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';

const routes: Routes = [
  {path: 'news-list', component: NewsListComponent},
  {path: '', redirectTo: 'news-list', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
