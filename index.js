const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})
app.get('/menu', (request, response) => {
  response.sendFile(__dirname + '/views/menu.html')
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})