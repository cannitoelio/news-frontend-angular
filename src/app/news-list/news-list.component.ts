import { Component, OnInit } from '@angular/core';
import {NotiziaDTO} from '../model/notizia/notiziaDTO';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: NotiziaDTO[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsList();
  }


  private getNewsList(): void {
    this.newsService.getNewsList().subscribe(data => {
      this.newsList = data;
    });
  }

}
