const server = require('./api/server')

const port = process.env.PORT || 5005
server.listen(port, () => console.log(`listening on localhost:${port}`))