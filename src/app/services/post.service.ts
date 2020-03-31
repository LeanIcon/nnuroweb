import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private httpClient: HttpClient) { }
  private API_URL = environment.API_URL;
  private POST_URL = '/post';

 public getPostsData(): Observable<any> {
    return this.httpClient.get(this.API_URL + this.POST_URL);
  }
}
