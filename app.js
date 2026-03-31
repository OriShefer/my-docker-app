const http = require('http')
const sharp = require('sharp')

const server = http.createServer((req, res) => {
  sharp({
    create: {
      width: 100,
      height: 100,
      channels: 3,
      background: { r: 0, g: 128, b: 255 }
    }
  })
    .png()
    .toBuffer()
    .then(buffer => {
      res.writeHead(200, { 'Content-Type': 'image/png' })
      res.end(buffer)
    })
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})