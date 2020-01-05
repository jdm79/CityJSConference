  
<template>
        <div class="column">
            <div class="carouselWrap">
                <VCarousel :autoplay="true" :perPage="1" :centerMode="true">
                    <Slide
                        v-for="item in speakers"
                        v-bind:key="item.id"
                    >
                      <Speaker 
                        :image="item.image"
                        :thumbnail="item.thumbnail" 
                        :name="item.name"
                        :company="item.company"
                        :twitter="item.twitter"
                        :bio="item.bio"
                      />
                    </Slide>
                </VCarousel>
            </div>
        </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import Speaker from "@/components/Speaker";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
export default {
    components: {
        Speaker,
    },
    props: {
        speakers: Array
    },
    mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style lang="scss">

  </style>