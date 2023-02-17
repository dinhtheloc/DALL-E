import { Component, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Post } from 'src/app/interfaces/post'
import { PostService } from 'src/app/services/post.service'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    id!: number
    form: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
    })

    constructor(
        public postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.id = this.route.snapshot.params['postId']
        this.postService.find(this.id).subscribe((data: Post) => {
            this.form.patchValue({
                title: data.title,
                body: data.body
            })
        })
    }

    get f() {
        return this.form.controls
    }
    submit() {
        console.log(this.form.value)
        this.postService
            .update(this.id, this.form.value)
            .subscribe((res: any) => {
                console.log('Post updated successfully!')
                this.router.navigateByUrl('post/index')
            })
    }
}
