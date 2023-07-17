import axios from 'axios'
import { queryCache, useQuery } from 'react-query'
import { Post, Error } from '../types/index'

export const useGetPosts = () =>
  useQuery<Post[], Error>(
    'posts',
    () => axios.get('api/posts').then((res) => res.data),
    {
      onSuccess: (data) => {
        data.forEach((post) => {
          queryCache.setQueryData(['post', post.id], post)
        })
      },
    }
  )
