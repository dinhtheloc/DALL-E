import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http'
import { finalize, Observable } from 'rxjs'
import { ShareDataService } from '../services/share-data.service'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private shareDataService: ShareDataService) {}
    private _totalRequests: number = 0
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        this._totalRequests++
        this.shareDataService.setLoading(true)
        return next.handle(request).pipe(
            finalize(() => {
                this._totalRequests--
                if (this._totalRequests === 0) {
                    this.shareDataService.setLoading(false)
                }
            })
        )
    }
}
