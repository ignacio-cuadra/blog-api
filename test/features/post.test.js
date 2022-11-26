/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../src/app/app.js'
import postFactory from '../../src/app/factories/post.factory.js'
import postRepository from '../../src/app/repositories/post.repository.js'

chai.use(chaiHttp)

describe('Post CRUD', () => {
  const { createPost } = postFactory()
  const { getPosts, getPostById, storePost, deletePostById } = postRepository()
  it('list all posts', async () => {
    const posts = await getPosts()
    const postsData = JSON.parse(JSON.stringify(posts))
    const res = await chai.request(app).get('/api/v1/posts')
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal({ posts: postsData })
  })
  it('create a new post', async () => {
    const post = createPost()
    const postData = { id: post.id, name: post.name, description: post.description }
    const res = await chai.request(app)
      .post('/api/v1/posts')
      .send(postData)
    expect(res).to.have.status(200)
    expect(res).to.be.json
    expect(res.body).to.have.property('post')
    const resultPost = { ...res.body.post }
    delete resultPost.createdAt
    expect(resultPost).to.deep.equal(postData)
    const newPost = await getPostById(post.id)
    delete newPost.createdAt
    expect(newPost).to.deep.equal(postData)
    deletePostById(post.id) // TODO: Remove this patch and create transactional queries that deleted after testing
  })
  it('delete a posts', async () => {
    const post = createPost()
    await storePost(post)
    const postId = post.id
    const postData = { id: post.id, name: post.name, description: post.description }
    const res = await chai.request(app).delete(`/api/v1/posts/${postId}`)
    expect(res).to.have.status(200)
    expect(res.body).to.have.property('post')
    const resultPost = res.body.post
    delete resultPost.createdAt
    expect(resultPost).to.deep.equal(postData)
    const deletedPost = await getPostById(postId)
    expect(deletedPost).to.be.null
  })
})
