export default class Post {
  constructor ({ id, name, description = '', createdAt = null }) {
    this.id = id
    this.name = name
    this.description = description
    this.createdAt = createdAt
  }
}
