<template>
  <div style="background: black;">
  <div class="home-info">
    <div class="overlay"></div>
    <section class="section">
      <div class="container">
        <div class="columns  is-multiline  home-info__inner content">
          <div class="column is-12">
            <div class="columns  is-mobile  is-multiline contend">
              <div class="column is-6-desktop is-12-mobile is-12-tablet">
                <h1>
                  <b>
                    City of London JS Community Conference
                    <br />CityJS Conference
                  </b>
                </h1>
                <div class="columns is-mobile is-multiline events eqheights">
                  <div class="column is-12-mobile is-6-desktop">
                    <a href="/buytickets">
                      <h2>
                        2021 EVENT @ 24-26 Mar 
                        <br />
                        <span>Hybrid Event</span><br />
                        <span>Regent Street Cinema / Online</span><br />
                      </h2>
                    </a>
                  </div>
                  <!-- <div class="column is-12-mobile is-6-desktop eqheights">
                      <h2>
                        SUBSCRIBE TO WIN A TICKET
                         <br /> 
                          <vue-mailchimp-email-signup-form
                          title=""
                          :element-id="'first-email-signup-form'"
                          :url="'https://cityjsconf.us19.list-manage.com/subscribe/post?u=eb9cc5d08a5ecc02a40df6f40&amp;id=11ac48b4f8'"
                        />
                      </h2>
                  </div> -->
                </div>
              </div>
              <div class="column is-multiline is-mobile is-4-desktop is-offset-2-desktop">
                <div class="info">
                  <section>
                    <div class="container">
                      <div class="columns is-multiline is-mobile">
                        <div class="column is-1-tablet is-1-desktop is-1-mobile info-vertical ">
                          <div class="info-number">3</div>
                        </div>
                        <div class="column is-9-desktop is-9-tablet is-9-mobile info-vertical is-offset-2">
                          <div class="info-text">
                            <span class="info-text__main">DAYS Conference</span>
                            <span class="info-text__sub">inc 2 DAYS Workshops</span>
                          </div>
                        </div>
                        <div class="column is-1-tablet is-1-desktop  is-1-mobile info-vertical ">
                          <div class="info-number">12+</div>
                        </div>
                        <div class="column is-9-desktop  is-9-tablet  is-9-mobile info-vertical  is-offset-2">
                          <div class="info-text">
                            <span class="info-text__main">SPEAKERS</span>
                            <span class="info-text__sub">Across 5 continents</span>
                          </div>
                        </div>
                        <div class="column is-1-tablet is-1-desktop is-1-mobile info-vertical">
                          <div class="info-number">1000</div>
                        </div>
                        <div class="column is-8-desktop  is-9-tablet  is-9-mobile info-vertical  is-offset-2">
                          <div class="info-text">
                            <span class="info-text__main">JAVASCRIPT DEVELOPERS</span>
                            <span class="info-text__sub">Connecting across the world</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
             <div class="timer">
                <Timer starttime="September 14, 2020 09:00:00" endtime="March 26, 2021 17:00:00"></Timer>
             </div>
          </div>
        </div>
      </div>
    </section>
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
    +mobile
      line-height: 1.2rem;
      margin-top: 0rem;
      font-size: 0.9rem;
    +ipadpro
      line-height: 1.2rem;
      font-size: 0.9rem;

  .events 
    margin-top: 50px;
    font-size: 3rem;
  
  .subscribe-container
    width: 100%;

  .content
    margin-bottom: 0px;
    .events
      h2 
        font-size: 1.5rem;
        +mobile
          font-size: 0.9rem;
        color: $white;
        background: $black;
        padding: 10px;
        span 
          font-size: 1.1rem;

  .contend
    color: $white;
    font-size: 1.9rem;
    font-weight: 700;
    text-transform: uppercase
    font-family: 'Oswald', sans-serif;
    margin: 0 auto;

  .location
    font-size: 1.8rem;
    +mobile
      font-size: .9rem;

  .overlay
    position: relative;
    display: block;
    overflow: hidden;
    height: 90vh;
    +mobile
      height: 125vh;
    +tablet
      height: 100vh

  .banner:before
    content: "";
    @include position(absolute, $top: 0, $left: 0);
    z-index: 1;
    width: 100%;

  .overlay-container
    position:absolute
    background: rgba($red, 0.7)

  .info 
    font-size: 0.5em;
    +mobile
   
  .home-info 
    left: 0;
    background-size: cover;
    background-image:  url(/images/previous_year/cinema1.jpg);
    background-repeat: no-repeat;
    background-position-y: -180px;
    height: 70vh;
    +mobile
      height: 140vh
    .overlay
      background-color: rgba(255, 48, 48, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    +mobile
      left: -108%;
      font-size: .3rem;   
      background-position-x: -200px;
      margin: 0px;
    +tablet
      height: 100vh
      left: 3px;
      width: 100%;
      top: -1.5rem;
  .home-info__inner
    margin: auto;
    padding-top: 20vh;
    top: 0;
    display: flex;
    width: 100%;
    +mobile
      padding-top: 0vw;
      text-align: center;
      display: block;
    +tablet
      max-width: 1344px;
      padding-top: 5vw;
    +desktop
      max-width: 1344px;
    .info
      flex: 1;
      display: flex;
      flex-direction: column;
      color: white;
      .info-vertical
        +mobile
          padding-top: 10px;
        .info-number
          line-height: 3rem;
          width: 2rem;
          height: 11vh;
          margin-right: 50px;
          font-size: 2.5rem;
          +mobile
            height: 5vh;
            font-size: 2rem;
        .info-text
          text-align: left;
          padding-left: 20px;
          +mobile
            font-size: 2rem;
          span
            font-size: 1.25rem
            +mobile
              font-size: 1.5rem;
            display: block;
    .left
      flex: 2;
    h1
      margin-top: 0px;
      color: white;
      font-family: 'Oswald', sans-serif;
      font-size: 3rem;
      +mobile
        font-size: 1.3rem
      +tablet 
        font-size: 2rem;

    .timer
      +tablet
        margin-top: 3rem;
      +mobile
        margin-top: 80px

  input
    width: 100%;

  button
    width: 100%;

  .eqheights
    max-height: 300px;

</style>