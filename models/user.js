const { query } = require('../mysql')

exports.register = ({ username, password }) => {
    let _sql = `insert into user (username, password) values('${username}', '${password}')`
    return query(_sql)
}

exports.findUserName = (username) => {
    let _sql = `select * from user where username = '${username}';`
    return query(_sql)
}
