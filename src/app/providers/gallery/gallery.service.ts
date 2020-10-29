import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private path = environment.api_url;

  constructor(private http: HttpClient) { }

  getBreeds() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.path}/breeds/list/all`)
      .subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  getBreedImages(breed: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.path}/breed/${breed}/images/random/5`)
      .subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
