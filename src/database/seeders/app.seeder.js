import postFactory from '../../app/factories/post.factory.js'
import postRepository from '../../app/repositories/post.repository.js'

const appSeeder = async () => {
  const { createPosts } = postFactory()
  const { storePosts } = postRepository()
  await storePosts(createPosts(10))
}

export default appSeeder
