// server/index.js
import app from './app.js'
import { createServer } from 'http'

// ⛔️ DON'T use app(req, res) — Express doesn't support this format directly
// ✅ Use Node's HTTP server interface
export default function handler(req, res) {
    const server = createServer(app)
    return server.emit('request', req, res)
}