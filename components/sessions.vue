<template>
      <section id="sessions" class="section">
            <app-h2
                    title="Sessions"
                    subtitle="Private Panel Talks"
                    :is-h2="true"
                    :white="true"
            >
            </app-h2>
              <div class="columns features">
                <div class="column is-3 card-column" v-for="(item, i) in sessions" v-bind:key="item._id">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img :src="`/siteimages/images/sessions/${i+1}.png`" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{{item.title}}</h4>
                        <p>{{item.disc}}</p>

                        <h5>Panel</h5>
                        <ul>
                             <li
                                v-for="(speaker, index) in item.panelists"
                                v-bind:key="index"
                            >

                                <div class="speaker-wrapper">
                                  <img class="speaker-img" :src="`siteimages/${speaker.img}`" alt="">
                                  <div>{{speaker.display}}</div>
                                </div>
                             </li>
                        </ul>
                       <p>{{item.time}}</p>
                      </div>
                    </div>
                    <div class="button-wrapper">
                      <a :href="item.link"><span class="button button-black is-link modal-button"
                                                  data-target="modal-card">Enter (Ticket holders)</span></a>
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

.section
  background: $black;

.container
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
	grid-gap: 0.5em;

.card
	height: 100%

.speaker-img
  width: 30px;
  
.card-content
  padding: 1.5rem;
  ul
    list-style-type: none;
    margin:  0px;
    padding: 0px;
    margin-top: 20px;
    margin-bottom: 20px;

.button-wrapper
  text-align: center;
  padding-bottom: 1.5rem;
  margin-top: auto;

.button-black
  background-color: black;
  &:hover
    border: 1px solid black;
    background-color: white;
    color: black;

.card-column .card
  display: flex;
  flex-direction: column;

.speaker-img
  border-radius: 100%;
  margin-right: 8px;

.speaker-wrapper
  display: flex;
  align-items: center;
</style>
