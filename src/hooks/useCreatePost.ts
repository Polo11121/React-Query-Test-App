import axios from 'axios'
import { queryCache, useMutation } from 'react-query'
import { Post } from 'types'

export const useCreatePost = () =>
  useMutation(
    (values) => axios.post<Post>('/api/posts', values).then((res) => res.data),
    {
      onMutate: (values: Post) => {
        const oldPosts = queryCache.getQueryData('posts')

        if (queryCache.getQueryData('posts')) {
          queryCache.setQueryData('posts', (old: Post[]) => [...old, values])
        }

        return () => queryCache.setQueryData('posts', oldPosts)
      },
      onError: (err, _values, rollback) => {
        console.log(err)

        if (rollback) {
          rollback()
        }
      },
      onSettled: () => {
        queryCache.invalidateQueries('posts')
      },
    }
  )
