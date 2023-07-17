import axios from 'axios'
import { queryCache, useMutation } from 'react-query'

interface Post {
  id: number
  title: string
  body: string
}

export const useSavePost = () =>
  useMutation(
    (values: Post) =>
      axios
        .patch<Post>(`/api/posts/${values.id}`, values)
        .then((res) => res.data),
    {
      onMutate: (values: Post) => {
        const oldPost = queryCache.getQueryData(['post', values.id])
        queryCache.setQueryData(['post', values.id], values)

        return () => queryCache.setQueryData(['post', values.id], oldPost)
      },

      onSuccess: (values) => {
        queryCache.setQueryData(['post', values.id], values)

        if (queryCache.getQueryData('posts')) {
          queryCache.setQueryData('posts', (old: Post[]) =>
            old.map((post) => (post.id === values.id ? values : post))
          )
        } else {
          queryCache.setQueryData('posts', [values])
          queryCache.invalidateQueries('posts')
        }
      },
      onError: (err, _values, rollback) => {
        console.log(err)

        if (rollback) {
          rollback()
        }
      },
    }
  )
