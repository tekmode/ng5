import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemcount: number;
btntxt:string='Add New Item';
goaltxt:string="My New Goal";
goals=[];
  constructor(private _data: DataService) { }

  ngOnInit() {
 this._data.goal.subscribe(res=> this.goals= res);
 this.itemcount=this.goals.length;

 this._data.changeGoal(this.goals);
  }
additem(){
  this.goals.push(this.goaltxt);
  this.goaltxt='';
  this.itemcount=this.goals.length;
  this._data.changeGoal(this.goals);
}
removeitem(i){
  this.goals.splice(i,1);
  this._data.changeGoal(this.goals);
}
}
