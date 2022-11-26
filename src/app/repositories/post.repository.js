import postgreRepository from '../persistence/postgre.repository.js'
import Post from '../models/post.model.js'

const postRepository = () => {
  const getPosts = async () => {
    let posts = []
    await postgreRepository.query('SELECT * FROM posts')
      .then((result) => {
        if (result.rows.length > 0) posts = result.rows.map(row => (new Post(row)))
      })
      .catch((error) => {
        throw error
      })
    return posts
  }
  const getPostById = async (id) => {
    let post
    await postgreRepository.query('SELECT * FROM posts WHERE id = $1', [id])
      .then((result) => {
        post = (result.rows.length > 0) ? new Post(result.rows[0]) : null
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
        post = (result.rows.length > 0) ? new Post(result.rows[0]) : null
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
        if (result.rows.length > 0) posts = result.rows.map(row => (new Post(row)))
      })
      .catch((error) => {
        throw error
      })
    return posts
  }
  const deletePostById = async (id) => {
    let post
    await postgreRepository.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id])
      .then((result) => {
        post = (result.rows.length > 0) ? new Post(result.rows[0]) : null
      })
      .catch((error) => {
        throw error
      })
    return post
  }
  return { getPosts, getPostById, storePost, storePosts, deletePostById }
}

export default postRepository
