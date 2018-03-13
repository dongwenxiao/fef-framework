module.exports = function formData(data) {
    let params = []
    for (let key in data) {
        params.push(`${key}=${data[key]}`)
    }
    return params.join('&')
}