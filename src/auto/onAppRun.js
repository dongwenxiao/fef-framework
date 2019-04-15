
require('../utils/fetch').setDomain('http://localhost:3167')

module.exports = ({history, store}) => {
  const proxyAction = require('./proxy-action').setHistory(history)
  const proxyState = require('./proxy-state')(store, proxyAction)
  const allDefaultActions = require('./all-default-actions')
  const userFetchActions = require('./user-fetch-actions')
}
