import { Component } from '@angular/core';
import { SendDataService } from 'src/app/Services/send-data.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private dataSender: SendDataService){

  }

  clickSearch(contentId: string): void{
    this.dataSender.sendData(contentId, 'newsListSearch')  
  }
}
