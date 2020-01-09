import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`workshops`).then(data => {
          commit('set', data.entries);
        })
    },
}