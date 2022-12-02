import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private router: Router) { }

  sendData(contentId: string, recievingComponent: string): void{
    var searchValue = (<HTMLInputElement>document.getElementById(contentId)).value;
    console.log(searchValue);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(
    [recievingComponent],
    { queryParams: { searchFor: searchValue } });
  }
}
