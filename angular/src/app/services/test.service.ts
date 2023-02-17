import { Injectable } from '@angular/core'

@Injectable()
export class TestService {
    constructor() {
        console.log('TestService')
    }

    log(message: string) {
        console.log(message)
    }
}
