import { faker } from '@faker-js/faker'
import Post from '../models/post.model.js'

const postFactory = () => {
  const createPost = () => {
    const id = faker.datatype.uuid()
    const name = faker.animal.cat()
    const description = faker.lorem.paragraph()
    return new Post({ id, name, description })
  }
  const createPosts = (numberOfPosts) => {
    const posts = []
    for (let index = 0; index < numberOfPosts; index++) {
      posts.push(createPost())
    }
    return posts
  }
  return { createPost, createPosts }
}
export default postFactory
