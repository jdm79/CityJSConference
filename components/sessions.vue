<template>
      <section class="section">
            <app-h2
                    title="Sessions"
                    subtitle="Private Panel Talks"
                    :is-h2="true"
                    :white="false"
            >
            </app-h2>
              <div class="columns features">
                <div class="column is-3" v-for="item in sessions" v-bind:key="item._id">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{{item.title}}</h4>
                        <p>  {{item.disc}} </p>
                        <p>   {{item.time}} </p>
                          <a href="/buytickets"><span class="button is-link modal-button" 
                          data-target="modal-card">Coming soon</span></a>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import h2 from '@/components/h2';

export default {
  name: "sessions",
  props: {
    items: {
      type: Array
    }
  },
  components: {
      "app-h2" : h2,
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

.container
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
	grid-gap: 0.5em;

.card
	height: max-content;

.card-content
  min-height: 250px;

</style>