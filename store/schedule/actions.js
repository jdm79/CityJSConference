import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`schedule`).then(data => {
          commit('set', data.entries);
        })
    },
    async current ({commit}, page) {
      commit('current', page);
  },
}