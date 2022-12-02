import { Component } from '@angular/core';
import { RssAddService } from 'src/app/Services/rss-add.service';

@Component({
  selector: 'app-rss-bar',
  templateUrl: './rss-bar.component.html',
  styleUrls: ['./rss-bar.component.css']
})
export class RssBarComponent {
  constructor(private rssService: RssAddService){}
  clickAddRss(contentId: string): void{
    this.rssService.addRss(contentId);
  }

}
