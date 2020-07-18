<template>
      <section class="section">
            <h2>Sessions</h2>
          	<div class="container">
                <div class="card" v-for="item in sessions" v-bind:key="item._id">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{item.title}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                        </div>

                        <div class="content">
                        {{item.disc}}
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
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
  components: {},
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

</style>