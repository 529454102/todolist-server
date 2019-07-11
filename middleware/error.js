const jwt = require('jsonwebtoken')

module.exports = async (ctx, next) => {
    const token = ctx.header.authorization
    try {
        if (token) {
            try {
                const userToken = jwt.verify(token.split(' ')[1], "demo")
                ctx.userToken = userToken
            } catch (error) {
                console.log('token验证失败', error)
            }
        }
        await next()
    } catch (error) {
        if (error.status === 401) {
            ctx.status = 400
            if (!error.originalError) {
                ctx.body = {
                    message: 'token为空'
                }
                return
            }
            ctx.body = {
                message: error.originalError.message === 'jwt expired' ? 'token过期' : 'token错误'
            }
        } else {
            ctx.status = 400,
                ctx.body = {
                    message: error
                }
        }
    }

}

