<template>
  <div id="topsection" style="position:relative; display: block;">
   <div class="home-info">
      <div class="overlay">
      </div>
  
      <div class="home-info__inner content">
        <div class="info left">
          <h1>
            <b>
              City of London JS Community Conference <br/>
              CityJS Conference
            </b>
          </h1>
          <div class="columns">
            <div class="column is-4">
                <h2>
                  14-18 Sep 2020 <br/>
                  <span> Remotely </span>
                </h2>
            </div>
            <div class="column is-4">
              <h2>
                26-29  Mar 2021<br/>
                <span> Regent Street Cinema</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info-vertical">
            <div class="info-number">
              2
            </div>
            <div class="info-text">
              <span class="info-text__main">DAYS</span>
              <span class="info-text__sub">inc 2 DAYS Workshops</span>
            </div>
          </div>
          <div class="info-vertical">
            <div class="info-number">
              25+
            </div>
            <div class="info-text">
              <span class="info-text__main">SPEAKERS</span>
              <span class="info-text__sub">Across all the continents</span>
            </div>
          </div>
          <div class="info-vertical">
            <div class="info-number">
              1000
            </div>
            <div class="info-text">
              <span class="info-text__main">JAVASCRIPT DEVELOPERS</span>
              <span class="info-text__sub">Connecting across the world</span>
            </div>
          </div>
        </div>
        
      </div>
      <footer>
            <div class="container">
              <section>
                  <div class="columns">
                    <div class="column">
                      <Timer starttime="September 14, 2020 09:00:00" endtime="September 14, 2020 17:00:00"></Timer>
                    </div>
                  </div>
              </section> 
            </div>
         </footer>
    </div>
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

  h1 
    margin-bottom: 3.2rem;
    margin-top: 1.5rem;
    font-size: 2rem;
    line-height: 3rem
    +mobile
      line-height: 1.2rem;
      margin-top: 0rem;
      font-size: 0.9rem;
    +ipadpro
      line-height: 1.2rem;
      margin-top: 0rem;
      font-size: 0.9rem;

  .content
    h2 
      font-size: 1.5rem;
      color: $white;
      background: $black;
      padding: 10px;
      span 
        font-size: 1.1rem;

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
  .home-info 
    background-image: url(/images/audience.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    overflow: hidden;
    +mobile
      height: 100vh;
      min-height: 300px;
    +tablet
      height: 47vw;
      min-height: 40vw;
    +desktop
      min-height: 100vw;
    .overlay
      background-color: rgba(255, 48, 48, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  .home-info__inner
    position: relative;
    margin: auto;
    padding: 10vw 0px;
    top: 0;
    display: flex;
    width: 100%;
    +mobile
      height: 100vh;
      text-align: center;
      display: block;
    +tablet
      max-width: 1344px;
    +desktop
      max-width: 1344px;
    .info
      flex: 1;
      display: flex;
      flex-direction: column;
      color: white;
      .info-vertical
        +mobile
          padding: 26px;
        right: 0;
        flex-grow: 1;
        display: flex;
        .info-number
          line-height: 3rem;
          flex: 1;
          width: 2rem;
          height: 11vh;
          margin-right: 50px;
          font-size: 2.5rem;
        .info-text
          flex: 6;
          span
            font-size: 1.25rem
            display: block;
    .left
      flex: 2;
    h1
      margin-top: 0px;
      color: white;
      font-family: 'Oswald', sans-serif;
      font-size: 3rem;

  .timer
    top: 100vh !important;
  
</style>