import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpService
} from './http.service';
import {
  HttpClient
} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _http: HttpClient) {
    this.getCelebi();
    this.getLeafeon();
  }
  ngOninit() {
    let celebi = this.getCelebi();
    let leafeon = this.getLeafeon();
  }
  getCelebi() {
    this._http.get("https://pokeapi.co/api/v2/pokemon-form/251/")
      .subscribe(data => {
        console.log(data)
        console.log(data.name)
      })
  }
  getLeafeon() {
    this._http.get("https://pokeapi.co/api/v2/pokemon-form/470/")
      .subscribe(data => {
        console.log(data)
        console.log(data.name)
      })
  }
}
