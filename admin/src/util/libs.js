let libs = {
  store: {
    read(key) {
      return localStorage.getItem(key)
    },
    write(key, value) {
      return localStorage.setItem(key, value)
    },
    remove(key) {
      return localStorage.removeItem(key)
    }
  },
  sessionStore: {
    read(key) {
      return sessionStorage.getItem(key)
    },
    write(key, value) {
      return sessionStorage.setItem(key, value)
    },
    remove(key) {
      return sessionStorage.removeItem(key)
    }
  },
  getCurrentTeamId() {
    return +libs.store.read('current_team')
  },
  getCurrentTeam(teams) {
    let currentTeamId = libs.getCurrentTeamId()
    if (teams.length === 0) {
      return null
    }
    let currentTeam = _.find(teams, t => { return t.id === currentTeamId })
    if (!currentTeam) {
      return null
    }
    return currentTeam
  },
  getToken() {
    return libs.store.read('access_token')
  },
  clearIntervals(timers = []) {
    let i, len = timers.length
    for(i = 0; i < len; i++) {
      clearInterval(timers[i])
      timers[i] = null
    }
  }
}

export default libs
