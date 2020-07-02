<template>
  <section class="shallow">
    <div class="testimonials is-text  ">
        <app-h2
            title="2020 Speakers"
            subtitle="We are excited to announce our global speakers for this year"
            :is-h2="true"
        >
        </app-h2>
        <div class="columns  is-mobile is-multiline is-centered is-gapless" > 
           <div 
                class="column is-three-quarters-mobile is-two-thirds-tablet
                 is-half-desktop is-one-third-widescreen 
                 is-one-quarter-fullhd 
                 "
                v-for="item in filteredSpeakers"
                v-bind:key="item._id"
           >
                    <div class="is-one ">
                         <div class="card-image">
                           <nuxt-link :to="`/speaker/${item._id}`" no-prefetch>
                                <figure class="image is-40x40">
                                    <img 
                                        v-if="typeof 
                                        item.image!== 'undefined'"  
                                        :alt="item.name" 
                                        :src="`/siteimages/${item.thumbnail.path}`"
                                        class="speaker"
                                    />
                                </figure>
                                    
                                <div class="columns">
                                      
                                    <div class="column is-12 talkinfo"
                                     >
                                       <span>
                                            <a 
                                                class="titlebtn"
                                                v-on:click="select(item)"
                                            >
                                                <h3 class="small-title talk-title">
                                                    {{item.title}}                                                                  
                                                </h3>
                                            </a>
                                        </span>
                                        <h4>
                                            {{item.name}}   
                                            
                                            <span>
                                                <a :href="`//twitter.com/${item.twitter}`">
                                                    <i data-v-4a676ae2="" class="fa fa-twitter"></i>
                                                </a>
                                            </span>
                                        </h4>
                                      
                                        <span style="company">
                                            {{item.company}}
                                        </span>
                                        <br/>
                                        <span class="pill">
                                               <i class="fa fa-globe"></i>
                                                {{item.town}},  {{item.country}}
                                        </span>

                                      
                                    </div>
                                     
                                </div>
                            </nuxt-link>
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
  props: {
    items: {
      type: Array,
    }
  },
  components: {
    'app-h2': h2,
    "app-talk" : talk
  },
  mounted: function() {
    this.$store.dispatch("speakers/get");
  },
  computed: {
    ...mapGetters({
        speakers: 'speakers/speakers',
    }),
    isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
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

    h3
     margin-bottom: 0px;

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