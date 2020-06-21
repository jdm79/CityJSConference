export default {
    set(state, workshops) {
        if (typeof workshops !== 'undefined') {
          state.list = workshops;
        }
    }
}