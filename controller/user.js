const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function checkSpace(str) {
    if (str.indexOf(" ") == -1) {
        return true
    } else {
        return false
    }
}

exports.register = async (ctx) => {
    const { username, password } = ctx.request.body
    if (!username || !password || !checkSpace(username)) {
        ctx.status = 400
        ctx.body = {
            message: '注册请求有误'
        }
        return
    }
    const data = await UserModel.findUserName(username)
    if (data.length !== 0) {
        ctx.body = {
            code: 401,
            message: '用户名已被注册'
        }
        return
    }
    let hashPsd = await bcrypt.hash(password, 10)
    try {
        await UserModel.register({ username, password: hashPsd })
        ctx.body = {
            code: 200,
            message: '用户注册成功',
        }
    } catch (error) {
        console.log(error)
        ctx.status = 500
        ctx.body = {
            message: '注册写入数据库出错'
        }
    }
}


exports.login = async (ctx) => {
    const { username, password } = ctx.request.body
    if (!username || !password) {
        ctx.status = 400
        ctx.body = {
            message: '登陆请求有误'
        }
        return
    }
    const data = await UserModel.findUserName(username)
    if (data.length === 0) {
        ctx.body = {
            code: 400,
            message: '抱歉,用户名或密码错误'
        }
        return
    }
    const check = await bcrypt.compare(password, data[0].password)
    if (!check) {
        ctx.body = {
            code: 400,
            message: '抱歉,用户名或密码错误'
        }
        return
    }
    const userToken = {
        username,
        id: data[0].id
    }
    const token = jwt.sign(userToken, "demo", { expiresIn: 60 * 60 })
    ctx.body = {
        code: 200,
        message: '登陆成功',
        token
    }
}



