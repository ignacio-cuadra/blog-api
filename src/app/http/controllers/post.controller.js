import { listPosts as listPostService, createPost as createPostService, deletePost as deletePostService } from '../../services/position.service.js'

const listPosts = async (request, response) => {
  listPostService()
    .then((posts) => {
      response.json({ posts })
    })
    .catch((error) => {
      console.error(error)
      response.json({ error })
    })
}

const createPost = (request, response) => {
  createPostService(request.body)
    .then((post) => {
      response.json({ post })
    })
    .catch((error) => {
      console.error(error)
      response.json({ error })
    })
}

const deletePost = (request, response) => {
  const id = request.params.id
  deletePostService(id)
    .then((post) => {
      response.json({ post })
    })
    .catch((error) => {
      console.error(error)
      response.json({ error })
    })
}

export { listPosts, createPost, deletePost }
