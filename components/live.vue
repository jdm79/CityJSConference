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
                    CityJS Conference
                    <br />CITY of London Community Conference
                  </b>
                </h1>
                <div class="columns is-mobile is-multiline events">
                  <div class="column is-12-mobile is-6-desktop">
                     <a href="https://live.remo.co/e/cityjs-conference">
                      <h2>
                      ENTER OUR LOUNGE AREA
                        <br />
                     
                        <span>Meet other developers, our sponsors, and Speakers and watch  Q&amp;As </span>
                      </h2>
                     </a>
                  </div>
                 <!-- <div class="column is-12-mobile is-6-desktop">
                      <h2>
                        SUBSCRIBE TO WATCH FREE
                          <span class="smalltext">Excludes SPEAKERS Q/A, Private Lounge, and Freebies</span>
                          <vue-mailchimp-email-signup-form
                          title=""
                          :element-id="'first-email-signup-form'"
                          :url="'https://cityjsconf.us19.list-manage.com/subscribe/post?u=eb9cc5d08a5ecc02a40df6f40&amp;id=11ac48b4f8'"
                        />

                      </h2>
                  </div> -->
                  <div class="column is-12-mobile is-6-desktop">
                     <a href="#workshops">
                      <h2>
                       Get a workshop
                        <br />
                        <span>8hrs Online using Zoom, learn NodeJS, React, GraphQL, and TypeScript</span>
                      </h2>
                     </a>
                  </div>
                  <div class="column is-12-mobile is-6-desktop">
                     <a href="#sessions">
                      <h2>
                        Watch 4 Panel Sessions
                        <br />
                        <span>The future of NodeJS, JavaScript Testing, Performance in JavaScript, and JAMSTACK</span>
                      </h2>
                     </a>
                  </div>
                   <div class="column is-12-mobile is-6-desktop">
                     <a href="/buytickets">
                      <h2>
                        26-29 Mar 2021
                        <br />
                        Buy your Early bird ticket <br/>
                        <span>@
                          Regent Street Cinema,   London</span> 
                        
                      </h2>
                     </a>
                  </div>

              
                  
                </div>
              </div>
              <div class="column is-multiline is-12-mobile is-5-desktop is-offset-1-desktop content">
                <div class="info" style="background: black; padding: 40px; color: #fff;">
                  <section>
                    <h2>LIVE</h2>
                    <div class="container">
                      <div class="columns is-multiline is-mobile video-container">
                       

                             <iframe width="560" height="315" src="https://www.youtube.com/embed/UefUuT-M1qQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
             <div class="timer">
                <Timer starttime="September 14, 2020 09:00:00" endtime="September 14, 2020 17:00:00"></Timer>
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

  .video-container
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
    iframe
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

  h1 
    margin-bottom: 3.2rem;
    margin-top: 1rem;
    font-size: 2rem;
    +mobile
      line-height: 1.2rem;
      margin-top: 0rem;
      font-size: 0.9rem;
    +ipadpro
      line-height: 1.2rem;
      font-size: 0.9rem;

  .subscribe-container
    width: 100%;

  .events 
    margin-top: 50px;
    font-size: 3rem;

  .content
    margin-bottom: 0px;
    h2
        color: $white;
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
          &.smalltext
           line-height: 0.9rem;
           font-size: 0.7rem;

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
        background: $black;

    input
      width: 100%;

    button
      width: 100%;





</style>