<template>
  <div>
    <div id="inner">
    <section>
      <app-nav 
        v-bind:items='pages'
      >
      </app-nav>
    </section>
    <section class="hero">
      <div class="home">
        <div>
            <banner 
              title='Speaker name'
              description='Speaker'
              bannerImage='Page.bannerimage'
            >
            </banner>
            <Speaker :id="id" />
        </div>
      </div>
    </section> 
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import nav from '@/components/nav';
  import banner from '@/components/banner';
  import speaker from '@/components/speaker';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      'app-nav': nav,
      'banner': banner,
      'Speaker': speaker
    },
    data: () => ({
      pagename: 'Speaker page',
      id: null
    }),
    mounted () {
      let speaker=  this.$route.params.speaker;
      if (typeof speaker !== 'undefined') {
        this.id = speaker;
      }
    },
    head () {
      return {
        title: 'CityJS Conference 2019, London UK'
      }
    },
    created (store) {
      this.$store.dispatch('pages/get');
    },
    computed: {
      ...mapGetters({
        pages: 'pages/pages',
      }),
    }
  }
</script>