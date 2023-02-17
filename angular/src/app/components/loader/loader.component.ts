import { Component, Optional, Self } from '@angular/core'
import { ShareDataService } from 'src/app/services/share-data.service'
import { TestService } from 'src/app/services/test.service'

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
    isLoading$ = this.shareDataService.isLoading$
    constructor(
        private testService: TestService,
        private shareDataService: ShareDataService
    ) {
        if (this.testService) this.testService.log('1234')
    }
}
