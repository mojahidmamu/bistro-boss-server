
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('boss in city')
})

app.listen(port, () => {
  console.log(`bistro boss in the city in dhaka ${port}`)
})
