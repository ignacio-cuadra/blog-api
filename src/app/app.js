import * as dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import apiRoute from './routes/api.route.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __views = path.join(__dirname, '../public/views/')

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.sendFile(path.join(__views, 'index.html'))
})

app.use('/api/v1', apiRoute())

export default app
