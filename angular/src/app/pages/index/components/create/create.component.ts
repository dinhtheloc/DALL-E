import { Component } from '@angular/core'

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { PostService } from 'src/app/services/post.service'

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
    form: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
    })

    constructor(public postService: PostService, private router: Router) {}

    get f() {
        return this.form.controls
    }

    submit() {
        console.log(this.form.value)
        this.postService.create(this.form.value).subscribe((res: any) => {
            console.log('Post created successfully!')
            this.router.navigateByUrl('post/index')
        })
    }
}
