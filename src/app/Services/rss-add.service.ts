import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RssAddService {

  constructor(private router: Router) { }
  addRss(rssLink: string): void{
    var obteinedRssLink = (<HTMLInputElement>document.getElementById(rssLink)).value;
    console.log(obteinedRssLink);
    this.router.navigate(['home']);
  }
}
