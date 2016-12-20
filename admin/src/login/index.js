import authConstants from './constants'

const auth = require('./reducer').default

const authActions = require('./actions').default

export default { auth, authActions }
