<template>
   <section class="section competitions">
            <div>
                <app-h2
                    title="Competitions"
                    subtitle="Thanks to our sponsors"
                    :is-h2="true"
                    :white="true"
                >
                </app-h2>
            </div>
          	<div class="container">
                <div class="card" v-for="item in competitions" v-bind:key="item._id">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                              <p class="title is-5">
                                <a :href="item.link" target="_blank">{{item.title}}</a>
                              </p>
                          </div>
                        </div>

                        <div class="content">
                          <div v-html="item.sortdesc"></div>
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
    name: "competitions",
    props: {
        items: {
            type: Array
        }
    },
   components: {
        "app-h2" : h2,
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

.competitions
    background: black;

.container
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 0.5em;

.card
	height: max-content;

.title
  padding: 2px;
  text-align: center;
  color: #4a4a4a;
  border: 2px solid #4a4a4a;
  a
    color: #4a4a4a;
.title:hover
  background-color: #4a4a4a;
.title:hover a
      color: white;

</style>
