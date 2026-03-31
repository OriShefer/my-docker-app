const http = require('http')
const { createCanvas } = require('canvas')

const server = http.createServer((req, res) => {
  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#0080ff'
  ctx.fillRect(0, 0, 200, 200)
  ctx.fillStyle = '#ffffff'
  ctx.font = '30px sans-serif'
  ctx.fillText('Hello Docker!', 30, 110)
  res.writeHead(200, { 'Content-Type': 'image/png' })
  res.end(canvas.toBuffer())
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})