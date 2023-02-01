import { Counter } from "./posts/Counter"

export default function PostsLayout({ children }) {
  return (
    <>
      <Counter />
      <small style={{ background: '#ffff', color: 'green' }}>El mejor canal de programación @midudev</small>
      {children}
    </>
  )
}