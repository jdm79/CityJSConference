<template>
  <section class="shallow">
    <div class="testimonials is-text  ">
        <app-h2
            title="2020 Speakers"
            subtitle="We are excited to announce our talks for this year"
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
                            <a 
                                v-on:click="select(item)"
                            >
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
                                      
                                    <div class="column is-12" style="padding: 0 3rem 0 3rem; margin-top: -50px; position: relative; background: white; margin: 0 auto; width: 85%; margin-bottom: 20px;">
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
                                      
                                        <span style="margin-top: 10px; font-size: 14px">
                                            <i class="fa fa-building" style=" font-size: 11px; margin-right:5px" aria-hidden="true"></i>
                                            {{item.company}}
                                        </span>
                                        <br/>
                                        <span style="margin-top: 10px; font-size: 14px">
                                                <i class="fa fa-signal-stream"></i>
                                                {{item.town}},  {{item.country}}
                                        </span>

                                      
                                    </div>
                                     
                                </div>
                            </a>
                        </div>
                    </div>
           </div>
           <div 
                :class="['column spekers-card-container modal-background', {'closed':open === false}]" 
                v-if="this.chosen"
                v-on:click="select(item)"
            >
                <div class="card speaker-card">
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img 
                                    v-if="typeof 
                                    chosen.image!== 'undefined'"  
                                    :alt="chosen.name" 
                                    :src="`/siteimages/${chosen.thumbnail.path}`"
                                    class="speaker"
                                />
                            </figure>
                            <a 
                                :class="['button  close closebtn', {'closed':open === false}]"
                                v-on:click="close()"
                            >
                                <span class="icon is-small">
                                    X
                                </span>
                            </a>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{chosen.name}}</p>
                            <p class="subtitle is-6">
                                <a :href="`//twitter.com/${chosen.twitter}`">
                                    @{{chosen.twitter}}
                                </a><br/>
                                {{chosen.company}}
                            </p>
                        </div>
                        </div>
                       <div>
                             <h2 class="small-title">{{chosen.title}}</h2>
                            <div v-html="chosen.talk" />
                        </div>
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
  data: function() {
    return {
        chosen: null,
        open: false,
    } 
  },
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
    this.carousel = bulmaCarousel.attach();
    this.$store.dispatch("speakers/get");
  },
  methods: {
    select: function (talk) {
        this.chosen = talk;
        this.open = !this.open;
    },
    close: function () {
        this.open = !this.open;
    }
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

    
    h4
     padding:  10px 0;
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