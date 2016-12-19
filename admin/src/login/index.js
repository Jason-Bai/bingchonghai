import authConstants from './constants'

const auth = require('./reducer')

const authActions = require('./actions').default

export default { auth, authActions }
