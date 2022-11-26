import postgreRepository from '../persistence/postgre.repository.js'
import Post from '../models/post.model.js'

const postRepository = () => {
  const getPosts = async () => {
    let posts = []
    await postgreRepository.query('SELECT * FROM posts ORDER BY created_at DESC')
      .then((result) => {
        if (result.rows.length === 0) return
        posts = result.rows.map(row => {
          const { id, name, description, created_at: createdAt } = row
          return new Post({ id, name, description, createdAt })
        })
      })
      .catch((error) => {
        throw error
      })
    return posts
  }
  const getPostById = async (id) => {
    let post = null
    await postgreRepository.query('SELECT * FROM posts WHERE id = $1', [id])
      .then((result) => {
        if (result.rows.length === 0) return
        const { id, name, description, created_at: createdAt } = result.rows[0]
        post = new Post({ id, name, description, createdAt })
      })
      .catch((error) => {
        throw error
      })
    return post
  }
  const storePost = async (post) => {
    const { id, name, description } = post
    await postgreRepository.query('INSERT INTO public.posts(id, name, description) VALUES ($1, $2, $3) RETURNING *', [id, name, description])
      .then((result) => {
        if (result.rows.length === 0) return
        const { id, name, description, created_at: createdAt } = result.rows[0]
        post = new Post({ id, name, description, createdAt })
      })
      .catch((error) => {
        throw error
      })
    return post
  }
  const storePosts = async (posts) => {
    const values = posts.reduce((values, post) => {
      const { id, name, description } = post
      return [...values, id, name, description]
    }, [])
    const stringValues = []
    for (let i = 0; i < posts.length; i++) {
      stringValues.push(`($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`)
    }
    await postgreRepository.query(`INSERT INTO public.posts(id, name, description) VALUES ${stringValues.join(',')} RETURNING *`, values)
      .then((result) => {
        if (result.rows.length === 0) return
        posts = result.rows.map(row => {
          const { id, name, description, created_at: createdAt } = row
          return new Post({ id, name, description, createdAt })
        })
      })
      .catch((error) => {
        throw error
      })
    return posts
  }
  const deletePostById = async (id) => {
    let post = null
    await postgreRepository.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id])
      .then((result) => {
        if (result.rows.length === 0) return
        const { id, name, description, created_at: createdAt } = result.rows[0]
        post = new Post({ id, name, description, createdAt })
      })
      .catch((error) => {
        throw error
      })
    return post
  }
  return { getPosts, getPostById, storePost, storePosts, deletePostById }
}

export default postRepository
