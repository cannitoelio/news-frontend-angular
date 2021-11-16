import { Component, OnInit } from '@angular/core';
import {NotiziaForm} from '../model/notizia/notiziaForm';
import {NewsService} from '../service/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotiziaDTO} from '../model/notizia/notiziaDTO';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {
  id!: number;
  notizia!: NotiziaDTO;
  notiziaForm!: NotiziaForm;
  constructor(private newsService: NewsService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.newsService.getNewsById(this.id).subscribe(data => {
      this.notizia = data;
    }, error => console.log(error)));


  }

  updateNews(): void {
    this.notiziaForm = {
      articolo: this.notizia.articolo as string,
      idNotizia: this.notizia.idNotizia,
      immagine: this.notizia.immagine,
      titolo: this.notizia.titolo as string,
    };
    console.log(this.notiziaForm);
    this.newsService.updateNews(this.id, this.notiziaForm)
      .subscribe( data => console.log(data),
        error => console.log(error));
  }
  goToNewsList(): void {
    this.router.navigate(['/news-list']);
  }
  onSubmit(): void {
    this.updateNews();
    this.goToNewsList();
  }
}
