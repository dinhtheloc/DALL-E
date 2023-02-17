import { Pipe, PipeTransform } from '@angular/core'
import { Post } from 'src/app/interfaces/post'

@Pipe({
    name: 'filterPosts',
    standalone: true,
})
export class FilterPostsPipe implements PipeTransform {
    transform(posts: Post[], searchText: string): Post[] {
        console.log({ searchText, posts })
        return posts.filter(
            (item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.prompt.toLowerCase().includes(searchText.toLowerCase())
        )
    }
}
