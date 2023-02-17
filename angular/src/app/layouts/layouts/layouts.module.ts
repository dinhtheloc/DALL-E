import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainLayoutComponent } from '../main-layout/main-layout.component'
import { CenteredContentLayoutComponent } from '../centered-content-layout/centered-content-layout.component'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { FooterComponent } from 'src/app/components/footer/footer.component'

@NgModule({
    imports: [CommonModule, RouterModule.forChild([])],
    exports: [
        MainLayoutComponent,
        CenteredContentLayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    declarations: [
        MainLayoutComponent,
        CenteredContentLayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
})
export class LayoutsModule {}
