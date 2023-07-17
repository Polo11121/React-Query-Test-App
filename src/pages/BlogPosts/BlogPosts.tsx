import React from 'react'
import { Link } from 'react-router-dom'
import { useGetPosts } from 'hooks'
import { PostStyles } from 'styled'

export const BlogPosts = () => {
  const { data: posts, isLoading, isError, error } = useGetPosts()

  return (
    <div>
      <h1>Blog</h1>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        `}
      >
        {isLoading ? (
          <span>Loading...</span>
        ) : isError ? (
          error.message
        ) : (
          posts?.map((post) => (
            <PostStyles as={Link} to={`./${post.id}`} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </PostStyles>
          ))
        )}
      </div>
    </div>
  )
}
