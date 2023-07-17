import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetPost, useSavePost, useDeletePost } from 'hooks'
import { PostForm } from 'components'
import { Loader } from 'styled'

export const AdminPost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const { data: post, isLoading } = useGetPost(postId)
  const [savePost, savePostInfo] = useSavePost()
  const [deletePost, deletePostInfo] = useDeletePost(postId)

  const onSubmit = async (values) => {
    await savePost({ id: postId, ...values })
  }

  const onDelete = async () => {
    await deletePost()
    navigate('/admin')
  }

  return (
    <>
      {isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>
            <Link to={`/blog/${post.id}`}>View Post</Link>
          </p>
          <PostForm
            initialValues={post}
            onSubmit={onSubmit}
            submitText={
              savePostInfo.isLoading
                ? 'Saving...'
                : savePostInfo.isError
                ? 'Error!'
                : savePostInfo.isSuccess
                ? 'Saved!'
                : 'Save Post'
            }
          />
          <p>
            <button onClick={onDelete}>
              {deletePostInfo.isLoading
                ? 'Deleting...'
                : deletePostInfo.isError
                ? 'Error!'
                : deletePostInfo.isSuccess
                ? 'Deleted!'
                : 'Delete Post'}
            </button>
          </p>
        </div>
      )}
    </>
  )
}
