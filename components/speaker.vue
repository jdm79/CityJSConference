<template>
  <div>
        <div class="card">
            <div class="card-image front">
              <figure class="image is-40x40">
                <img
                  v-if="typeof 
                  image!== 'undefined'"
                  width="150"
                  :alt="name"
                  :src="`/siteimages/${thumbnail.path}`"
                  class="speaker"
                />
              </figure>
              <div class="name">
                <div class="columns">
                    <div class="column marginless paddingless">
                        <strong>{{name}}      <a class="icon" :href="`//twitter.com/${twitter}`"><i class="fa fa-twitter"></i></a>    </strong><br/>
                        {{company}}
                    </div>
                    <div class="column">
                    </div>
                </div>
              </div>
            </div>
            <div class="media-content">
              <div class="content">
                <p v-html="bio" />
              </div>

            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
      image: Object,
      thumbnail: Object, 
      name: String,
      company: String,
      twitter: String,
      bio: String
  }
};
</script>


<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .card
        position: relative;
        display: block;
        max-height: 720px;
        height: 680px;

    .card-image
       overflow: hidden

    .position-absolute
        position: absolute;

    .position-relative
        position: relative;
        display: block;
        z-index: 1000;
    
    .top-100
        top: 10px;
    
    .right-0
        right: 10px;

    .bg-blue
        background: $red;
        color: white;

    .title, .subtitle
        margin: 0px !important;

    .label
        width: 50%;
        padding: 20px;

    .name 
        position: absolute;
        bottom: -3px;
        left: 3%;
        z-index: 200;
        width: 95%;
        background: $white;
        text-align: left;
        padding-left: 2%;
        padding-top: 2%;

    .card-content
        max-height: 300px;
        position: relative;
        z-index: 10;
        padding-top: 0px !important;
        display: block;

    .media-content
        padding: 5%;
        max-height: 350px;
        overflow: auto;

    /* front pane, placed above back */
    .front
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);


    /* back, initially hidden pane */
    .back
        transform: rotateY(180deg);
    
    .back-logo
        width: 30%;
        height: 30%;
        img
            position: absolute;
            top: 0px;
            text-align: center;
            eft: 35%;
            border-radius: 50%;
            width: 30%;
            +mobile
                margin: 0 auto;
                top: 0px;

    
    .back-logo
        width: 30%;
        height: 30%;
        img
            position: absolute;
            bottom: 15px;
            text-align: center;
            left: 35%;
            border-radius: 50%;
            width: 30%;
            +mobile
                margin: 0 auto;
                top: 0px;

    .back-content
        padding-top: 40px;
        font-weight: bold;
        color: #00304a;
        position: absolute;
        overflow: scroll;
        top: 6vw;
        left: 0;
        right: 0;
        text-align: center;
        font-family: Courier;
        font-size: 0.75rem;
        +mobile
           font-size: 0.70rem;
           top: 16vw;

    .bio
        color: $black;
        padding-top: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        +mobile
            height: 110px;
            line-height: 12px;
</style>