import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`sessions`).then(data => {
          commit('set', data.entries);
        })
    },
}