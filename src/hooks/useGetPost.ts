import axios from 'axios'
import { useQuery, queryCache } from 'react-query'
import { Post, Error } from '../types/index'

export const useGetPost = (postId) =>
  useQuery<Post, Error>(['post', postId], () =>
    axios.get(`/api/posts/${postId}`).then((res) => res.data)
  )
