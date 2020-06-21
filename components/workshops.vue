<template>
  <section class="section shallow workshops">
    <div class="container">
      <app-h2
        title="2020 Speakers"
        subtitle="We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section"
        :is-h2="true"
      ></app-h2>
      <div class="row columns is-mobile is-multiline">
        <div clss="container" 
        >

          <div class="columns"
          v-for="item in workshops" v-bind:key="item._id"
          >

            <div class="column is-3">
                <img   :src="`/siteimages/${item.image.path}`" alt="workshop" />
            </div>
            <div class="column is-paddingless" >
                <h3>{{item.title}} by {{item.instructor}}</h3>

                <p v-html="item.description" />

                <strong> Date: {{new Date(item.date).getDate()}}/{{new Date(item.date).getMonth()+1}}/2020 09:00 - 17:00</strong>

                <br/> <br/>

                <strong><a href="/buytickets">Buy Tickets >></a></strong>
            </div>
            <hr /> 
          </div>



        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted: function() {
    this.$store.dispatch("workshops/get");
  },
  computed: {
    ...mapGetters({
      workshops: "workshops/workshops"
    })
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .workshops 
        margin-top: -80px;
        margin-left: 10px;
</style>