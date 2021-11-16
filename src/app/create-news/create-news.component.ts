import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NotiziaForm} from '../model/notizia/notiziaForm';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  notizia: NotiziaForm;
  constructor(private newsService: NewsService,
              private router: Router) {
    this.notizia =  {articolo: '', idNotizia: 0, immagine: '', titolo: ''};
  }

  ngOnInit(): void {
  }

  saveNews(): void {
    this.newsService.createNews(this.notizia).subscribe(data => {
      console.log(data);
    });
  }
  goToNewsList(): void {
    this.router.navigate(['/news-list']);
  }
  onSubmit(): void {
    this.saveNews();
    this.goToNewsList();
  }
}
