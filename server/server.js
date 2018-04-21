const express = require('express')
const app = express()
const path = require('path')

let publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

let port = process.env.PORT || 3000
app.listen(port, () => { 
    console.log(`Server deployed on port ${port}`)
})
