import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {}
