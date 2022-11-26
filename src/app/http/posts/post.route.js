import { Router } from 'express'
import validate from '../../middlewares/validate.middleware.js'
import { createPost, deletePost, listPosts } from './post.controller.js'
import { createPostValidation } from './post.validation.js'

const positionRouter = () => {
  const router = Router()
  router.get('/', listPosts)
  router.post('/', createPostValidation(), validate, createPost)
  router.delete('/:id', deletePost)
  return router
}

export default positionRouter
