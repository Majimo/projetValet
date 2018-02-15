import { Injectable } from '@angular/core';

/*
  Generated class for the CarStatusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarStatusProvider {

  constructor() { }

  carIn() {
    return true;
  }

  carOut() {
    return false;
  }

}
