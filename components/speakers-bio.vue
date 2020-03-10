<template>
  <section class="section shallow">
    <div class="testimonials has-text-centered">

      <app-h2
        title="2020 Speakers"
        subtitle="We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section"
        :is-h2="true"
      ></app-h2>
      <div class="row is-hidden-desktop is-hidden-tablet">
       <speaker-carousel
          :speakers="filteredSpeakers"
        
        />
      </div>
      <div class="row columns is-mobile is-multiline is-hidden-mobile">
        <div
          class="column is-3 is-paddingless"
          v-for="item in filteredSpeakers"
          v-bind:key="item._id"
        >
          <speaker 
            :image="item.image"
            :thumbnail="item.thumbnail" 
            :name="item.name"
            :company="item.company"
            :twitter="item.twitter"
            :bio="item.bio"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from "@/components/h2";
import SpeakerCarousel from "@/components/carousel-speaker";
import Speaker from "@/components/speaker";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-h2": h2,
    "speaker-carousel": SpeakerCarousel,
    "speaker": Speaker
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
        }).sort(function(a, b) {
            return a.order-b.order
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

    .title, .subtitle
        margin: 0px !important;

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
        max-height: 150px;
        overflow: auto


    /* front pane, placed above back */
    .front
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);


    /* back, initially hidden pane */
    .back
        transform: rotateY(180deg);
    
    .back-logo
        width: 30%;
        height: 30%;
        img
            position: absolute;
            top: 0px;
            text-align: center;
            eft: 35%;
            border-radius: 50%;
            width: 30%;
            +mobile
                margin: 0 auto;
                top: 0px;

    
    .back-logo
        width: 30%;
        height: 30%;
        img
            position: absolute;
            bottom: 15px;
            text-align: center;
            left: 35%;
            border-radius: 50%;
            width: 30%;
            +mobile
                margin: 0 auto;
                top: 0px;

    .back-content
        padding-top: 40px;
        font-weight: bold;
        color: #00304a;
        position: absolute;
        overflow: scroll;
        top: 6vw;
        left: 0;
        right: 0;
        text-align: center;
        font-family: Courier;
        font-size: 0.75rem;
        +mobile
           font-size: 0.70rem;
           top: 16vw;

    .bio
        color: $black;
        padding-top: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        +mobile
            height: 110px;
            line-height: 12px;
</style>