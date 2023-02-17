import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const authToken = localStorage.getItem('auth_token')
        if (authToken) {
            const authReq = request.clone({
                headers: request.headers.set(
                    'Authorization',
                    'Bearer ' + authToken
                ),
            })
            return next.handle(authReq)
        }
        return next.handle(request)
    }
}
