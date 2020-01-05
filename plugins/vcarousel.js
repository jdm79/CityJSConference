import Vue from 'vue'
import { Carousel, Slide } from "vue-carousel";

Vue.use(Carousel)
Vue.use(Slide)
Vue.component('VCarousel', Carousel)
Vue.component('Slide', Slide);