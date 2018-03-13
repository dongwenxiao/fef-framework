module.exports = function(url) {
    let user = window.loginUser
    return !~url.indexOf('?') ?
        url + `?token=${user.token}` :
        url + `&token=${user.token}`

}
