import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ShareDataService {
    isLoading = new BehaviorSubject<boolean>(false)

    isLoading$ = this.isLoading.asObservable()

    constructor() {}

    setLoading(value: boolean) {
        this.isLoading.next(value)
    }
}
