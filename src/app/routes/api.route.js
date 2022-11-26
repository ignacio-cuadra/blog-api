import { Router } from 'express'
import positionRouter from '../http/posts/post.route.js'

export default () => {
  const router = Router()
  router.use('/posts', positionRouter())
  return router
}
