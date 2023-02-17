import { Component } from '@angular/core'
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms'
import { Post } from 'src/app/interfaces/post'
import { PostService } from 'src/app/services/post.service'
import { ShareDataService } from 'src/app/services/share-data.service'

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
    posts: Post[] = []

    exampleForm!: FormGroup

    constructor(
        public postService: PostService,
        private fb: FormBuilder,
        private shareDataService: ShareDataService
    ) {}

    ngOnInit(): void {
        // this.shareDataService.setLoading(true)
        this.postService.getAll().subscribe((data: Post[]) => {
            this.posts = data
            console.log(this.posts)
            // this.shareDataService.setLoading(false)
        })

        this.exampleForm = this.fb.group({
            itemRows: this.fb.array([this.createItemRow()]),
        })
    }

    deletePost(id: number) {
        this.postService.delete(id).subscribe((res) => {
            this.posts = this.posts.filter((item) => item.id !== id)
            console.log('Post deleted successfully!')
        })
    }

    get itemRows() {
        return this.exampleForm.get('itemRows') as FormArray
    }

    createItemRow() {
        return this.fb.group({
            itemName: ['', Validators.required],
            itemQuantity: [0, Validators.required],
        })
    }

    addItemRow() {
        this.itemRows.push(this.createItemRow())
    }
}
