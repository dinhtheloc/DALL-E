import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
@Injectable({
    providedIn: 'root',
})
export class PostService {
    apiUrl = environment.apiUrl

    constructor(private http: HttpClient) {}

    getPosts(): Observable<any> {
        return this.http.get(`${this.apiUrl}/v1/post`)
    }

    createPost(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/post`, data)
    }
}
