import { Injectable } from '@angular/core';

@Injectable()
export class SpeakService{
  speak(word) {
    console.log(`说了${word}`);
  }
}
