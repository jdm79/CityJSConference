export default {
    schedule (state) {
      return state.list
    },
    getSpeaker: state => id => {
      console.log(id);
      console.log(state.list);

      let slot = [] , timeslot = {};

      for (let i = 0; i< state.list.length; i++) {
        if (Array.isArray(state.list[i].speakers)) {
          slot = state.list[i].speakers.filter(speaker => {
              return speaker._id === id
          })
          if (slot.length > 0) {
            timeslot = state.list[i];
            break;
          }
        }
      }

      return timeslot;
    }
}
  