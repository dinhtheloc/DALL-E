import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DebounceKeyupDirective } from 'src/app/directives/debounce-keyup.directive'
import { Post } from 'src/app/interfaces/post'
import { PostService } from 'src/app/services/post.service'
import { CardComponent } from './components/card/card.component'
import { FormFilterComponent } from './components/form-filter/form-filter.component'
import { FilterPostsPipe } from './pipes/filter-posts.pipe'

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        FormsModule,
        CardComponent,
        FormFilterComponent,
        DebounceKeyupDirective,
        FilterPostsPipe,
    ],
})
export class HomeComponent implements OnInit {
    posts: Post[] = []
    searchText = ''
    constructor(private postService: PostService) {}
    ngOnInit(): void {
        this.getPosts()
    }

    public handleDebouncedKeyUp(event: KeyboardEvent): void {
        this.searchText = (event.target as HTMLInputElement).value
    }

    getPosts() {
        this.postService.getPosts().subscribe((posts: any) => {
            this.posts = posts.data as Post[]
        })
    }
}
