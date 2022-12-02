import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private router: Router){

  }

  clickSearch(contentId: string): void{
    this.search(contentId)  
  }

  search(contentId: string): void{
    var searchValue = (<HTMLInputElement>document.getElementById(contentId)).value;
    console.log(searchValue);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(
    ['newsListSearch'],
    { queryParams: { searchFor: searchValue } });
  }
}
