import { Post } from 'src/app/interfaces/post'
import { PostService } from 'src/app/services/post.service'
import { Component, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
    id!: number
    post!: Post

    /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
    constructor(
        public postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
     * Write code on Method
     *
     * @return response()
     */
    ngOnInit(): void {
        this.id = this.route.snapshot.params['postId']

        this.postService.find(this.id).subscribe((data: Post) => {
            this.post = data
        })
    }
}
