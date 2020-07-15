import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`competitions`).then(data => {
          commit('set', data.entries);
        })
    },
}