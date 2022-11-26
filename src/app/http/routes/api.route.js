import { Router } from 'express'
import { createPost, deletePost, listPosts } from '../controllers/post.controller.js'

export default () => {
  const router = Router()
  router.get('/posts', listPosts)
  router.post('/posts', createPost)
  router.delete('/posts/:id', deletePost)
  return router
}
