import Link from 'next/link'
import Image from 'next/image'

const fetchComments = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error("Error al cargar los comentarios")
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then((res) => res.json())
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#4444', fontSize: '12px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            width={200}
            height={200}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}