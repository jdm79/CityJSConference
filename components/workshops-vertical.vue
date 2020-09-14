<template>
      <section id="workshops">
            <app-h2
                    title="Workshops"
                    subtitle="Learn from our specialists"
                    :is-h2="true"
                    :white="false"
            >
            </app-h2>
              <div class="columns">
                <div class="column " v-for="(item) in workshops" v-bind:key="item._id">
                  <div class="card">
                    <div class="card-image">
                        <a href="/workshops" target="_blank"><figure class="image">
                         <img :src="`/siteimages/${item.image.path}`" alt="workshop" />
                      </figure></a>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <a href="/workshops" target="_blank"><h3>{{item.title}} by {{item.instructor}}</h3></a>
                          <strong> Date: {{new Date(item.date).getDate()}}/{{new Date(item.date).getMonth()+1}}/2020 09:00 - 17:00</strong>
                      </div>
                    </div>
                    <div class="button-wrapper">
                      <a href="/buytickets" ><span class="button button-black is-link modal-button"
                        data-target="modal-card">Register</span></a>
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
  mounted: function() {
    this.$store.dispatch("workshops/get");
  },
  components: {
      "app-h2" : h2,
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
