import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities:any;
  city: any;
  route: any;
  selectedOption:any
  constructor() { }
  
 


  ngOnInit(): void {
  
  }

  selectOption(value:any) {
    console.log(value.value);
    
  }
}