import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPost } from 'hooks'

export const BlogPost = () => {
  const { postId } = useParams()

  const { data: post, isLoading, isError, error } = useGetPost(postId)

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        error.message
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  )
}
