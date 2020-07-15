export default {
    set(state, sessions) {
        if (typeof sessions !== 'undefined') {
         state.list = sessions;
        }
    }
}