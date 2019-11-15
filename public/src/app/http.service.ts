import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }

}
