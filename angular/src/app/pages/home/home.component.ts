import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { DebounceKeyupDirective } from 'src/app/directives/debounce-keyup.directive'
import { Post } from 'src/app/interfaces/post'
import { PostService } from 'src/app/services/post.service'
import { CardComponent } from './components/card/card.component'

import { FilterPostsPipe } from './pipes/filter-posts.pipe'

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CardComponent,
        CommonModule,
        DebounceKeyupDirective,
        FilterPostsPipe,
        FormsModule,
        RouterModule,
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
