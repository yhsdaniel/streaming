import handler from '../server/app.js'

export default async function (req, res) {
  return handler(req, res)
}