import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutsModule } from './layouts/layouts/layouts.module'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { CrudService } from './services/crud.service'
import { IndexComponent } from './pages/index/index.component'
import { LoaderComponent } from './components/loader/loader.component'
import { LoadingInterceptor } from './interceptors/loading.interceptor'
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { TestService } from './services/test.service'

@NgModule({
    declarations: [AppComponent, LoaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        LayoutsModule,

        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        CrudService,
        // TestService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
