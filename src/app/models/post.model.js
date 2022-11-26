export default class Post {
  constructor ({ id, name, description = '' }) {
    this.id = id
    this.name = name
    this.description = description
  }
}
