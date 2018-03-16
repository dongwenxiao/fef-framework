const config = require('../config')
const fs = require('fs-extra')

module.exports = function(file, content) {

    fs.outputFile(file, content)
        .then(() => console.log('>>>>>>>> Finish: ' + file.replace(config.root, '')))
        // .then(() => fs.readFile(file, 'utf8'))
        // .then(data => {
        //     console.log(data)
        // })
        .catch(err => {
            console.error(err)
        })
}