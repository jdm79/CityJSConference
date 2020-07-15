<template>
    <section class="section bg-gray">
      sessions  2
     {{sessions}}
      <div v-for="item in sessions" v-bind:key="item._id">
          ddd
          <h4 slot="title">{{item.title}}</h4>
      </div>
          

    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "sessions",
    props: {
        items: {
            type: Array
        }
    },
    components: {
    },
    created(store) {
        this.$store.dispatch("sessions/get");
    },
    computed: {
        ...mapGetters({
            sessions: "sessions/sessions"
        })
    }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
  
</style>