import axios from 'axios'

import { queryCache, useMutation } from 'react-query'
import { Post } from 'types'

export const useDeletePost = (postId: string) =>
  useMutation(
    () => axios.delete<Post>(`/api/posts/${postId}`).then((res) => res.data),
    {
      onError: (err) => {
        console.log(err)
      },
      onSuccess: () => {
        queryCache.invalidateQueries('posts')
      },
    }
  )
