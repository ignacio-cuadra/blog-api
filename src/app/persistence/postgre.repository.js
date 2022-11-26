import * as pg from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg.default
class PostgreRepository {
  constructor () {
    this.pool = new Pool()
  }

  async query (script, values = []) {
    const client = await this.pool.connect()
    const result = await client.query(script, values)
    client.release()
    return result
  }
}

const postgreRepository = new PostgreRepository()

export default postgreRepository
