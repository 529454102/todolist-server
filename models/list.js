const { query } = require('../mysql')
const dateFormat = require('dateformat');


exports.getList = ({ status, userId }) => {
    let _sql
    if (status === undefined) {
        _sql = `select * from list where user_id = ${userId} order by createTime;`
    } else {
        _sql = `select * from list where status = ${status} and user_id = ${userId} order by createTime;`
    }

    return query(_sql)
}

exports.addList = ({ content, userId }) => {
    let _sql = `insert into list (content, status, user_id, createTime) values ('${content.trim()}', 0, ${userId},'${dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")}');`
    return query(_sql)
}

exports.delList = ({ id, userId }) => {
    // let _sql = `delete from list where id in (${ids.map(item => item)});`
    let _sql = `delete from list where id = ${id} and user_id = ${userId} ;`
    console.log(_sql)
    return query(_sql)
}

exports.updateList = ({ id, content, status, userId }) => {
    let _sql
    if (content === undefined) {
        _sql = `update list set status = ${status} where id = ${id} and user_id = ${userId};`
        console.log('status')
    } else if (status === undefined) {
        _sql = `update list set content = '${content}' where id = ${id} and user_id = ${userId};`
        console.log('content')
    } else {
        _sql = `update list set content = '${content.trim()}',status = ${status} where id = ${id} and user_id = ${userId};`
        console.log('status content')
    }
    return query(_sql)
}