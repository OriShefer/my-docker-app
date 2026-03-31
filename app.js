const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const hostname = fs.readFileSync('/etc/hostname', 'utf8')
  res.end('Hello from: ' + hostname)
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})