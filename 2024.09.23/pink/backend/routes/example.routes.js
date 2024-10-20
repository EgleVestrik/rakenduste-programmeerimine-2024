const express = require('express')
const router = express()

app.get('/', (req, res) => {
    res.send('Hello Woorld!')
  })
  

  
  app.get('/ab?cd', (req, res) => {
      res.send('abglecd')
  })
  
  
  
  app.get('/users/:33/books/:22', (req, res) => {
      res.send(req.params)
    })


module.exports = router;