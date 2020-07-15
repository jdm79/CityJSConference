export default {
    set(state, competitions) {
        if (typeof competitions !== 'undefined') {
         state.list = competitions;
        }
    }
}