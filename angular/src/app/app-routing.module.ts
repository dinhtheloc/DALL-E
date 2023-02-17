import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CenteredContentLayoutComponent } from './layouts/centered-content-layout/centered-content-layout.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [{ path: 'home', component: HomeComponent }],
    },
    {
        path: '',
        component: CenteredContentLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ],
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(
                (mod) => mod.HomeComponent
            ),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login.component').then(
                (mod) => mod.LoginComponent
            ),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./pages/register/register.component').then(
                (mod) => mod.RegisterComponent
            ),
    },
    {
        path: 'post',
        loadChildren: () =>
            import('./pages/index/index.module').then((m) => m.IndexModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
