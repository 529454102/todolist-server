const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const err = require('./middleware/error')
const jwt = require('koa-jwt')
const users = require('./routes/users')
const list = require('./routes/list')
const cors = require('koa2-cors')

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(err)
app.use(jwt({secret: "demo"}).unless({path: [/^\/login/, /^\/register/]}))
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())
app.use(list.routes(), list.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
