import { Component, OnInit } from '@angular/core';
import {SearchNewService} from '../../Services/search-news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent {
   noticias: any[] = []

  constructor (private api: SearchNewService){

  }

  ngOnInit(): void {
    //ese 1 es porque esta api tiene paginacion
    this.api.getAll("1").subscribe((res) => {
      let answer = res.items;;
      console.log(JSON.stringify(answer))
      this.cargarNoticias(answer);
    });
  }

  cargarNoticias(answer: any) {
    //this.libros.splice(0, this.libros.length);
    for (let i = 0; i < answer.length; i++) {
      let temp = answer[i];
      console.log(temp.id);

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
    //console.log(this.libros);
  }

  cargarNoticiasPorNombre(answer: any, title: String) {
    for (let i = 0; i < answer.length; i++) {
      let temp = answer[i];
      console.log(temp.id);
      if(temp.title === title){
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