import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post } from '../interfaces/post'
@Injectable({
    providedIn: 'root',
})
export class PostService {
    apiUrl = environment.apiUrl

    constructor(private http: HttpClient) {}
    // Read
    getPosts(): Observable<any> {
        return this.http.get(`${this.apiUrl}/v1/post`)
    }
}
