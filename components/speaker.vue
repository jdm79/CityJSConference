<template>
  <section class="speaker">
    <div class="testimonials is-text  container "
        v-if="selectedSpeaker"
    >
        <div class="columns is-multiline is-mobile " > 
             <div class="column marginless">
                <h1>
                    {{selectedSpeaker.name}} 
                </h1>
                 <span class="small-title talk-title">
                    {{selectedSpeaker.company}}                                                             
                </span><br/>
                <span>
                        <i class="fa fa-globe"></i>
                            {{selectedSpeaker.town}},  {{selectedSpeaker.country}}
                </span> <br/>
                 <span class="twitter">
                    <a :href="`//twitter.com/${selectedSpeaker.twitter}`">
                        <i data-v-4a676ae2="" class="fa fa-twitter"></i>
                    </a>
                </span>
                                      
                <h2> {{selectedSpeaker.title}} </h2>
                <p v-html="selectedSpeaker.talk" />
                <h2>Bio</h2>
                 <p v-html="selectedSpeaker.bio" />
            </div>
            <div 
                class="column is-12-mobile"
            >
                    <div>
                         <div class="card-image">
                                <figure class="image is-40x40">
                                    <img 
                                        :alt="selectedSpeaker.name" 
                                        :src="`/siteimages/${selectedSpeaker.thumbnail.path}`"
                                        class="speaker"
                                    />
                                </figure>
                               
                        </div>
                    </div>
           </div>
            </div>
          </div>
          
          
 
    </section>
</template>

<script>
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from '@/components/h2';
import talk from '@/components/talk';
import { mapGetters } from 'vuex'
export default {
  components: {
    'app-h2': h2,
    "app-talk" : talk
  },
  props: ['id'],
  mounted: function() {
    this.$store.dispatch("speakers/get");
  },
  methods: {
  },
  computed: {
    ...mapGetters({
        speakers: 'speakers/speakers',
    }),
    isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
    }, 
     selectedSpeaker() {
      if (typeof this.speakers !== "undefined") {
        return this.speakers.filter(speaker => {
          return speaker.year === 2020 & speaker._id === this.id;
        })[0]
      }
      }
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    .speaker
      margin-bottom: 20px;
      h1
       font-size: 3rem;
       margin-bottom: 1rem;
       padding-bottom: 0rem;
       position: relative;
       span
        &.twitter
         font-size: 1rem;
         position: absolute;
         left: 0px;
         bottom: -15px;
      h2
       font-size: 1.5rem;
       line-height: 1.5rem;
       text-transform: initial;
       margin-bottom: 0.5rem;
       margin-top: 1rem;
    .talkinfo
        padding: 1rem 3rem 0 3rem; 
        margin-top: -50px;
        position: relative; 
        background: white; 
        margin: 0 auto; 
        width: 85%; 
        margin-bottom: 20px;
    
    .company
        font-size: 11px; 
        margin-right: 5px;
    .titlebtn
            padding-top: 40px;
    .pill 
        background-color: $white;
        border: gray;
        color: $black;
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
        position: absolute;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        top: -20px;
        left: 40px
    
    h4
     padding-top:  5px;
     font-weight: 500;
    
    .talk-title
        height: 120px;
    .small-title
        text-align: left;  
    .speaker-name
        text-align: left;
    a.titlebtn
        color: $black;
        h3 
            min-height: 50px;
            font-size: 1.1rem;
            height: auto;
    .closed
        display: none
    img
        text-align: center;
        left: 30%;
        margin: 0 auto;
        top: 0px;
    .spekers-card-container
        position: fixed;
        top: 0%;
        left: 0%;
        z-index: 1000;
        width: 100%;
        margin: 0 auto;
        +mobile
            top: 55px;
            left: 0%;
            width: 100%;
       
        .speaker-card
            position: absolute
            font-size: 0.8rem;
            top: 20%;
            left: 35%;
            width: 40%;
            height: 500px;
            display: block;
            +mobile
             top: 0px;
             left: 0px;
             width: 100%;
             min-height: 230vw;
            .closebtn
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
        
        .small-title
            color: red;
            font-size: 0.9rem;
            line-height: 1rem;
            text-transform: initial;
            font-weight: bold;
            padding: 0px;
            margin-bottom: 5px;
</style>