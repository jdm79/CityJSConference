<template>
    <div id="inner">
    <section class="hero">
      <div class="home">
       <div class="home">
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
</template>

<script>
  import Vue from 'vue'
  import nav from '@/components/nav';
  import banner from '@/components/banner';
  import page from '@/components/page';
  import speaker from '@/components/speaker';
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
    async mounted () {
      let pagename= this.$route.params.page;
      if (typeof pagename !== 'undefined') {
        this.pagename = pagename;
      }
      this.$store.dispatch("pages/get");
        this.id = this.$route.params.speaker;
    },
    head () {
      return {
        title: 'CityJS Conference 2020, London UK'
      }
    },
  }
</script>