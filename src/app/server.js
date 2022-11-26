import app from './app.js'

const PORT = process.env.port
app.listen(PORT, () => {
  console.log(`API is running in: http://localhost:${PORT}/`)
})
