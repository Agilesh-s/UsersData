import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data)=>{
        this.usersData = data
      }
    )
  }

  usersData:any = {}
  ngOnInit(): void {
  }

}
