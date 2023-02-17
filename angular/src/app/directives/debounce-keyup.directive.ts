import { Directive, HostListener } from '@angular/core'
import { AbstractDebounceDirective } from './abstract-debounce.directive'

@Directive({
    selector: '[debounceKeyUp]',
    standalone: true,
})
export class DebounceKeyupDirective extends AbstractDebounceDirective {
    constructor() {
        super()
    }

    @HostListener('keyup', ['$event'])
    public onKeyUp(event: any): void {
        event.preventDefault()
        this.emitEvent$.next(event)
    }
}
