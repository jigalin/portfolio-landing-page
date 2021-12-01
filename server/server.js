const express = require('express')
const http = require('http')
const app = express()
app.use(express.static('build'))

const port = process.env.PORT || 3000

const server = http.createServer(app)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'This page does not exist!' })
}

app.use(unknownEndpoint)

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
