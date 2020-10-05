<template>
    <section class="section bg-red" id="highlights">
        <div class id="videos">
            <app-h2
                :title="`Our ${this.current.url ==='home'? '2020' : this.current.year} Highlights`"
                :subtitle="
                    `View from our amazing ${this.current.url ==='home'? '2020' : this.current.year} speakers`
                "
                :is-h2="true"
                :white="true"
            ></app-h2>
            <div class="carouselWrap">
                <Carousel :autoplay="true" :perPage="slideCount" :centerMode="true">
     
                    <Slide
                        v-for="item in speakers"
                        v-bind:key="item._id"
                    >
                    
                        <HighlightCard :item="item" :year="item.year"/>

                        
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import { Carousel, Slide } from "vue-carousel";
import HighlightCard from "./HighlightCard";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from "@/components/h2";
import { mapGetters } from "vuex";

export default {
    props: {
        year: String
    },
    components: {
        "app-h2": h2,
        HighlightCard,
        Carousel,
        Slide
    },
    mixins: [VueScreenSize.VueScreenSizeMixin],
    computed: {
        slideCount() {

            const ismobile =  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;

            return ismobile ? 1 : Math.floor(this.$vssWidth/540)
        },
        ...mapGetters({
            items: "speakers/speakers",
            current: "pages/current"
        }),
        speakers() {
            if (typeof this.items !== "undefined") {
                return this.items.filter(item => {
                    return (
                        item.year === parseInt((this.current.title === 'Home') ? '2020' : this.current.year) &&
                        (item.event === "talk")
                    );
                });
            } else {
                return [];
            }
        }
    },
    created(store) {
        this.$store.dispatch("speakers/get");
    }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .bg-red
        background: $red;
        color: $white;

    .carouselWrap
        padding-top: 40px;
        margin: 0 auto;

    .VueCarousel-slide
        display: flex;
        justify-content: center;

  </style>