import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchLoginService {

  constructor() { }

  $modal = new EventEmitter<any>();
  


}
