<template>
  <section class="section shallow">
    <div class="testimonials has-text-centered">
      <app-h2
        title="2020 Speakers"
        subtitle="We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section"
        :is-h2="true"
      ></app-h2>
      <div class="row columns is-mobile is-multiline">
        <div
          class="column is-one-quarter-desktop is-full-mobile"
          v-for="item in filteredSpeakers"
          v-bind:key="item._id"
        >
          <div class="card">
            <div class="card-image front">
              <figure class="image is-40x40">
                <img
                  v-if="typeof 
                  item.image!== 'undefined'"
                  width="150"
                  :alt="item.name"
                  :src="`/siteimages/${item.thumbnail.path}`"
                  class="speaker"
                />
              </figure>
              <div class="name">
                <div class="columns">
                    <div class="column marginless paddingless">
                        <strong>{{item.name}}      <a class="icon" :href="`//twitter.com/${item.twitter}`"><i class="fa fa-twitter"></i></a>    </strong><br/>
                        {{item.company}}
                    </div>
                    <div class="column">
                    </div>
                </div>
              </div>
            </div>
            <div class="media-content">
              <div class="content">
                <p v-html="item.bio" />
              </div>
            </div>
          </div>
          <!-- 
          <Speaker :data="item" />-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from "@/components/h2";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-h2": h2
  },
  mounted: function() {
    this.carousel = bulmaCarousel.attach();
    this.$store.dispatch("speakers/get");
  },
  computed: {
    ...mapGetters({
      speakers: "speakers/speakers"
    }),
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
    },
    filteredSpeakers() {
      if (typeof this.speakers !== "undefined") {
        return this.speakers.filter(speaker => {
          return speaker.year === 2020;
        });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .card
        position: relative;
        display: block;
        max-height: 720px;
        height: 680px;

    .card-image
       overflow: hidden

    .position-absolute
        position: absolute;

    .position-relative
        position: relative;
        display: block;
        z-index: 1000;
    
    .top-100
        top: 10px;
    
    .right-0
        right: 10px;

    .bg-blue
        background: $red;
        color: white;

    .label
        width: 50%;
        padding: 20px;

    .name 
        position: absolute;
        bottom: -3px;
        left: 3%;
        z-index: 200;
        width: 95%;
        background: $white;
        text-align: left;
        padding-left: 2%;
        padding-top: 2%;

    .card-content
        max-height: 300px;
        position: relative;
        z-index: 10;
        padding-top: 0px !important;
        display: block;

    .media-content
        padding: 5%;
        max-height: 200px;
        overflow: auto;

    /* front pane, placed above back */
    .front
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);

</style>