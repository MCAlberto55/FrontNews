import { Component, OnInit  } from '@angular/core';
import {SearchNewService} from '../../Services/search-news.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-news-search',
  templateUrl: './list-news-search.component.html',
  styleUrls: ['./list-news-search.component.css']
})
export class ListNewsSearchComponent {
  noticias: any[] = []
  searchFor: string = "";
  constructor (private api: SearchNewService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    //ese 1 es porque esta api tiene paginacion

    this.route.queryParams.subscribe((params: Params) => this.searchFor = params['searchFor']);

    this.api.getAll("1").subscribe((res) => {
      let answer = res.items;
      let searchFor = this.searchFor.toLowerCase();
      console.log(JSON.stringify(answer));
      this.cargarNoticiasPorNombre(answer, searchFor);
    });
  }

  cargarNoticiasPorNombre(answer: any, title: string) {
    for (let i = 0; i < answer.length; i++) {
      let temp = answer[i];
      console.log(temp.id);
      if(temp.title.toLowerCase().includes(title)){
        let New = [
          temp.title,
          temp.availableQuantity,
          //temp.createdAt,
          temp.description,
          temp.imageUrl,
          temp.id,
        ];
        this.noticias.push(New);
      }
    }
  }
}
