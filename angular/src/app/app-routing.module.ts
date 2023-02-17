import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CenteredContentLayoutComponent } from './layouts/centered-content-layout/centered-content-layout.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { CreatePostComponent } from './pages/create-post/create-post.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'create-post', component: CreatePostComponent },
        ],
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
        path: 'create-post',
        loadComponent: () =>
            import('./pages/create-post/create-post.component').then(
                (mod) => mod.CreatePostComponent
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
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
