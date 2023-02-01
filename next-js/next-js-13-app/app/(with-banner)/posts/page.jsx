import { Suspense } from 'react';
import { ListOfPosts } from './ListOfPosts';

export default function PostsPage() {
  return (
    <section>
    <Suspense fallback="CARGANDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!">
      <ListOfPosts />
    </Suspense>
    </section>
  )
}