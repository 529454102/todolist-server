const ListModel = require('../models/list')

exports.getList = async (ctx) => {
    const status = ctx.query.status
    userId = ctx.userToken.id
    try {
        const res = await ListModel.getList({ status, userId })
        ctx.body = {
            code: 200,
            message: '获取列表成功',
            list: res
        }
    } catch (error) {
        console.log(error)
        ctx.status = 500
        ctx.body = {
            message: '查询列表sql出错'
        }
    }
}

exports.addList = async (ctx) => {
    const userId = ctx.userToken.id
    content = ctx.request.body.content.trim()
    console.log(content)
    if (content === "" || content === undefined) {
        ctx.status = 400
        ctx.body = {
            message: content === "" ? '添加列表请求为空' : '缺少content参数'
        }
        return
    }
    try {
        await ListModel.addList({ content, userId })
        ctx.body = {
            code: 200,
            message: '添加成功'
        }
    } catch (error) {
        console.log(error)
        ctx.status = 500
        ctx.body = {
            message: '添加列表sql出错'
        }
    }
}
exports.delList = async (ctx) => {
    const userId = ctx.userToken.id
    id = ctx.request.body.id
    if (typeof (id) != 'number' || id === undefined) {
        ctx.status = 400
        ctx.body = {
            message: 'id参数有误'
        }
        return
    }
    try {
        const res = await ListModel.delList({ id, userId })
        if (res.affectedRows === 0) {
            ctx.status = 400
            ctx.body = {
                message: '无效的id参数请求'
            }
            return
        }
        ctx.body = {
            code: 200,
            message: '删除成功'
        }
    } catch (error) {
        console.log(error)
        ctx.status = 500
        ctx.body = {
            message: '删除列表sql出错'
        }
    }
}

exports.updateList = async (ctx) => {
    const { id, content, status } = ctx.request.body
    console.log(ctx.request.body)
    const userId = ctx.userToken.id
    if (!id || typeof (id) != 'number') {
        ctx.status = 400
        ctx.body = {
            message: 'id参数错误'
        }
        return
    }
    if (status) {
        if (status !== 0 && status !== 1) {
            ctx.status = 400
            ctx.body = {
                message: 'status参数错误'
            }
            return
        }
    }
    if (content) {
        if (typeof (content) != 'string') {
            ctx.status = 400
            ctx.body = {
                message: 'content参数错误'
            }
            return
        }
    }
    if (!content && status === undefined) {
        ctx.status = 400
        ctx.body = {
            message: 'content,status参数都为空'
        }
        return
    }
    try {
        const res = await ListModel.updateList({ id, content, status, userId })
        if (res.affectedRows === 0) {
            ctx.status = 400
            ctx.body = {
                message: '无效的参数请求'
            }
            return
        }
        ctx.body = {
            code: 200,
            message: '更新成功'
        }
    } catch (error) {
        console.log(error)
        ctx.status = 500
        ctx.body = {
            message: '更新列表sql出错'
        }
    }

}
