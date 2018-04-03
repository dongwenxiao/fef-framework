
require('../utils/fetch').setDomain('http://10.60.206.6:3167')

module.exports = ({history, store}) => {
  const proxyAction = require('./proxy-action').setHistory(history)
  const proxyState = require('./proxy-state')(store, proxyAction)
  const allDefaultActions = require('./all-default-actions')
  const userFetchActions = require('./user-fetch-actions')
}
