const config = require('./config')
const fs = require('fs-extra')


module.exports = function(file, content) {

    // const file = config.root + '/file.txt'

    fs.outputFile(file, content)
        .then(() => console.log('>>>>>>>> Finish: ' + file))
        // .then(() => fs.readFile(file, 'utf8'))
        // .then(data => {
        //     console.log(data)
        // })
        .catch(err => {
            console.error(err)
        })
}