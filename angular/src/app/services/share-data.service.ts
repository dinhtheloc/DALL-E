import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ShareDataService {

    isLoading = new BehaviorSubject<boolean>(false)

    isLoading$ = this.isLoading.asObservable()

    constructor() {
        console.log('init ShareDataService', )
    }

    setLoading(value: boolean) {
        this.isLoading.next(value)
    }
}
