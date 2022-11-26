import postRepository from '../repositories/post.repository.js'

const { getPosts, storePost, deletePostById } = postRepository() // TODO: Repository Injection

const listPosts = async () => {
  const posts = await getPosts()
  return posts
}

const createPost = async ({ id, name, description }) => {
  const post = await storePost({ id, name, description })
  return post
}

const deletePost = async (id) => {
  const post = await deletePostById(id)
  return post
}

export { listPosts, createPost, deletePost }
