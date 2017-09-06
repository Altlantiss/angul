import { Component } from '@angular/core';
import { SpeakService } from '../share/speak.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[
  //
  // ]
})
export class LoginComponent {

  constructor(
    private _spaekService: SpeakService
  ) {
    this.speak('hello');
  }

  speak(word) {
    this._spaekService.speak(word);
  }
}
