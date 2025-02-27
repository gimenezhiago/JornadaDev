import { createServer } from 'node:http'

const server = createServer(() => {
    console.log('rodando')
})

server.listen(3333)