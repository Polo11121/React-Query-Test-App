import React from 'react'
import { Link } from 'react-router-dom'
import { PostForm } from 'components'
import { Loader } from 'styled'
import { useGetPosts, useCreatePost } from 'hooks'

export const AdminPosts = () => {
  const { data: post, isLoading } = useGetPosts()
  const [createPost, createPostInfo] = useCreatePost()

  const onSubmit = async (values) => {
    await createPost(values)
  }

  return (
    <section>
      <div>
        <div>
          {isLoading ? (
            <span>
              <Loader /> Loading
            </span>
          ) : (
            <>
              <h3>Posts</h3>
              <ul>
                {post.map((post) => (
                  <li key={post.id}>
                    <Link to={`./${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
              <br />
            </>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h3>Create New Post</h3>
        <div>
          <PostForm
            onSubmit={onSubmit}
            clearOnSubmit
            submitText={
              createPostInfo.isLoading
                ? 'Saving...'
                : createPostInfo.isError
                ? 'Error!'
                : createPostInfo.isSuccess
                ? 'Saved!'
                : 'Create Post'
            }
          />
        </div>
      </div>
    </section>
  )
}
