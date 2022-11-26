import { migrate as pgMigrate } from 'postgres-migrations'
import * as dotenv from 'dotenv'
dotenv.config()

const migrate = async () => {
  const dbConfig = {
    database: process.env.pgdatabase,
    user: process.env.pguser,
    password: process.env.pgpassword,
    host: process.env.pghost,
    port: parseInt(process.env.pgport),

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: process.env.pgdatabase
  }
  await pgMigrate(dbConfig, './src/database/migrations')
}

console.log('the migrate has started')
migrate()
  .then(() => {
    console.log('the migrate has finished')
  })
  .catch((error) => {
    console.error(error)
  })
