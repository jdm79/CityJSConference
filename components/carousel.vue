<template>
  <div>
    <div class="overlay">
      <div class="overlay-container">
        <section id="home">
          <div class="video_shader"></div>
          <div class="video_contain lazyload" data-bg="/images/previous_year/cinema1.jpg"></div>
        </section>
        <div class="columns has-text-centered slide is-marginless">
          <div class="column is-two-thirds is-6 is-offset-4 contend">
            <h1>
              <b>
                City of London JavaScript Conference
                <br />CityJS Conference
               
              </b>
               <br />27 March 2020
                <br />Regent Street Cinema
            </h1>
            <a href="/buytickets" class="is-info button info is-primary">Get your tickets</a>
             <a href="https://www.papercall.io/cityjs2020" class="is-info button info is-primary">Submit your proposal</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <Timer starttime="May 1, 2019 09:00:00" endtime="May 1, 2019 17:00:00"></Timer> -->
  </div>
</template>


<script>
import timer from "@/components/timer";
import h2 from "@/components/h2";
export default {
  props: {
    slides: {
      type: String
    }
  },
  components: {
    Timer: timer,
    "app-h2": h2
  }
};
</script>

<style lang="sass">
  @import '~/assets/css/mq.sass';

  h2
    padding: 5px;

  h1 
    margin-bottom: 4.2rem;
    margin-top: 5.2rem;
    +mobile
      margin-top: 2.5rem;


  .contend
    color: $white;
    font-size: 1.9rem;
    font-weight: 700
    line-height: 2rem
    text-transform: uppercase
    font-family: 'Oswald', sans-serif;
    position: absolute
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    left: 0;
    right: 0;
    @include position(absolute, $top: 20%, $left: -10%)
    +mobile
      top: 0px;
      font-size: 1.2rem;
      height: 200vw;
      @include position(absolute, $top: 13%, $left: 4%)
    +tablet
      top: 20%;

  .video_contain
    &.lazyloaded
      background: url(/images/previous_year/cinema1.jpg) no-repeat top;
      position: absolute;
      background-repeat: no-repeat;
      padding: 150px 0;
      height: 100vw;
      background-position-y: -156px;
      left: 0;
      width: 98%;
      height: 215vw;
      top: -1.2rem;
      background-size: contain;
      +mobile
        top: -25%;
        left: -78%;
        width: 320%;
      +tablet
        left: 3px;
        width: 100%;
        height: 215vw;
        top: -1.5rem;
      +desktop

  .location
    font-size: 1.8rem;
    +mobile
      font-size: .9rem;

  .overlay
    position: relative;
    display: block;
    overflow: hidden;
    +mobile
      height: 113vw;
      min-height: 300px;
    +tablet
      height: 47vw;
      min-height: 40vw;
    +desktop
      min-height: 100vw;


  .banner:before
    content: "";
    @include position(absolute, $top: 0, $left: 0);
    z-index: 1;
    width: 100%;
    height: auto;
  
  .video-player
    position: absolute;
    width: 100%;
    height: auto;

  .overlay-container
    position:absolute
    background: rgba($red, 0.7)
    height: 230vw;
  
  .slide
    width: 100%
    height: 100%;
    background: inherit
    text-align: center
    @include position(absolute, $top: 0px, $left: 0px)
    +mobile
      padding: 0px;
      margin: 0px;
    +tablet
    +desktop

  .info 
    margin-top: 5px;
    font-size: 0.5em;
    +mobile
      font-size: .9rem;   
  
</style>