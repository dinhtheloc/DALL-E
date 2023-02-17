import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class CrudService {
    apiUrl: string = 'enter-your-api-url'
    headers = new HttpHeaders().set('Content-Type', 'application/json')
    constructor(private http: HttpClient) {}
    // Create
    createTask(data: any): Observable<any> {
        let API_URL = `${this.apiUrl}/create-task`
        return this.http.post(API_URL, data).pipe(catchError(this.error))
    }
    // Read
    showTasks() {
        return this.http.get(`${this.apiUrl}`)
    }
    // Update
    updateTask(id: any, data: any): Observable<any> {
        let API_URL = `${this.apiUrl}/update-task/${id}`
        return this.http
            .put(API_URL, data, { headers: this.headers })
            .pipe(catchError(this.error))
    }
    // Delete
    deleteTask(id: any): Observable<any> {
        var API_URL = `${this.apiUrl}/delete-task/${id}`
        return this.http.delete(API_URL).pipe(catchError(this.error))
    }
    // Handle Errors
    error(error: HttpErrorResponse) {
        let errorMessage = ''
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
        }
        console.log(errorMessage)
        return throwError(() => {
            return errorMessage
        })
    }
}
