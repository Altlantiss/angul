import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SpeakService } from '../share/speak.service';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[
  //
  // ]
})
export class LoginComponent implements OnInit {
  @Output() baby: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(' loginBaby ') loginBaby;
  ok = 'ok';
  date: number = new Date().getTime();
  flag = false;
  list: any[] = [];
  ngOnInit() {
   this.operate();
  }
  color = 'blue';
  constructor(
    private _spaekService: SpeakService
  ) {
    this.speak('hello');
  }

  speak(word) {
    this._spaekService.speak(word);
  }
  doFlag($event) {
    this.flag = !this.flag;
    console.log($event);
    console.log(this.loginBaby);
  }

  selectItem(i) {
    this.list[i].c = !this.list[i].c;
  }

  operate() {
    // this.baby.emit(this.ok);
    return this._spaekService.getCategories()
      .subscribe((datas) => {
      console.log(datas);
      datas.data.forEach((item, index) =>{
        this.list[index] = {};
        this.list[index].id = item.id;
        this.list[index].name = item.name;
        // this.list.push(item);
        });
      },
        (error) => {
      console.log(error);
        });
  }
}
