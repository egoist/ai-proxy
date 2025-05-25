import {serve} from '@hono/node-server'
import app from './main.js'

const port=  Number(process.env.PORT || '4000')
serve({
    fetch: app.fetch,
    port
})

console.log(`http://localhost:${port}`)
