const Router = require('koa-router')
const router = new Router()
const query = require('./db')
const { LOGIN, REGISTER,ALL } = require("./sql")



router.post('/usims/doctor/login',async (ctx, next) => {
    const postParam = ctx.request.body
    let query_res = await query(LOGIN(postParam.worknumber))
    ctx.body = query_res
})

router.post('/usims/doctor/register', async (ctx, next) => {
    const postParam = ctx.request.body
    console.log("请求数据" + JSON.stringify(postParam))
    let query_res = await query(REGISTER(postParam.worknumber, postParam.password, postParam.name, postParam.gender, postParam.contact, postParam.permission))
    ctx.body = query_res
})

router.get('/usims/doctor/all', async (ctx, next) => {
    let query_res = await query(ALL())
    ctx.body = query_res
})

module.exports = router