<template>
    <section class="section bg-gray">
      competitions12
      {{competitions}}
      <div v-for="item in competitions" v-bind:key="item._id">
          ddd
          <h4 slot="title">{{item.title}}</h4>
      </div>
          
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "competitions",
    props: {
        items: {
            type: Array
        }
    },
    components: {
    },
    created(store) {
        this.$store.dispatch("competitions/get");
    },
    computed: {
        ...mapGetters({
           competitions: "competitions/competitions"
        })
    }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
  
</style>