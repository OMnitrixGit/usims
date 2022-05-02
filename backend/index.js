const Koa = require('koa')
const bodyParser = require('koa-body')
const router = require('./src/router')
const app = new Koa()

app.use(bodyParser({multpart: true}))

app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Methods', 'POST');
    await next();
})

app.use(async (ctx,next)=>{
	console.log(new Date())
	await next()
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
console.log('usims backend is starting at port 3000')