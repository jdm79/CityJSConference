<template>
  <section class="blackbag">
    <div class>
      <div class>
        <div class="columns row columns is-mobile is-multiline">
          <div class="column is-8-desktop is-12-mobile">
            <div class="columns row columns is-mobile is-multiline">
              <div class="column is-12-desktop is-12-mobile">
                <a
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741317572"
                  target="_blank"
                >
                  <img class="is-2-dektop is-12-mobile lazyload" :data-src="`/images/previous_year/city1.jpg`" />
                </a>
              </div>

              <div class="column is-6-desktop is-12-mobile">
                <a
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img 
                    class="is-2-dektop is-12-mobile lazyload" 
                    :data-src="`/images/previous_year/city2.jpg`" 
                  />
                </a>
              </div>

              <div class="column is-6-desktop is-12-mobile">
                <a
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img class="is-2-dektop is-12-mobile lazyload" 
                  :data-src="`/images/previous_year/city3.jpg`" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-4 is-hidden-mobile">
            <div class="columns row columns is-mobile is-multiline">
              <div class="column is-12-mobile">
                <a
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741317572"
                  target="_blank"
                >
                  <img class="is-2-dektop is-12-mobile lazyload"

                   :data-src="`/images/previous_year/city4.jpg`"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="is-12">
          <p class="is-pulled-left photography">
            photography
            <a href="https://www.instagram.com/mnmarkg/">@mnmarkg</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import h2 from "@/components/h2";
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  components: {
    "app-h2": h2
  },
  computed: {},
  props: {}
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .nopadding
        padding: 0;


    .blackbag
        background: $black;
        
    .photography
      color: $white;
      font-size: 12px;
      margin-left: 20px;
      a
        color: $white;
        font-weight: bold;

    .pictitle
      margin: 0px 0px;
      text-align: center;
      position: absolute;
      display: none;
      width: 95%;
      padding: 20px;
      background: #fff;
      bottom: 20px;
      left: 10px;
      +mobile
        color: #fff;
        width: 100%;
        position: initial;
        background: #b13232;
        border: 1px solid #322525;



    .container
      text-align: center;
      padding: 10px 20px;


    .side-crop 
      max-width: 100%; 
      overflow: hidden;
      height: 450px;
      position: relative
      display: block;
      img
        max-width: initial;
        top: -152px;
        position: absolute;
        left: 0px;
        width: 100%;

    .fill
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      display: block;
      padding: 0px;
      img
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
        position: absolute;
        top: 0;
</style>
