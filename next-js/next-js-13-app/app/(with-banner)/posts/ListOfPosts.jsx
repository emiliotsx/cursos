import Link from 'next/link'

import { LikeButton } from './LikeButton'

// getStaticProps
// -> fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())

// getServerSideProps
// -> fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' }).then((res) => res.json())

// incremental Static Generation
const fetchPosts = () => fetch("https://jsonplaceholder.typicode.com/posts", {
  next: {
    revalidate: 60
  }
})
  .then((res) => res.json());

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h1 style={{ color: "#0e7" }}>{post.title}</h1>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ))
}