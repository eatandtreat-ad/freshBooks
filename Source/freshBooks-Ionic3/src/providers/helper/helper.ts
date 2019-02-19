import { Injectable } from "@angular/core";

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {
  constructor() {
    console.log("Hello HelperProvider Provider");
  }

  ls = {
    set: (key, value) => {
      return new Promise(resolve => {
        window.localStorage.setItem(key, JSON.stringify(value));
        resolve();
      });
    },
    get: key => {
      return new Promise(resolve => {
        resolve(JSON.parse(window.localStorage.getItem(key)));
      });
    },
    remove: key => {
      return new Promise(resolve => {
        window.localStorage.removeItem(key);
        resolve();
      });
    }
  };
}
