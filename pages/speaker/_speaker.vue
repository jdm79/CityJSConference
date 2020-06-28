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
  import page from '@/components/page';
  import speaker from '@/components/speaker';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      'app-nav': nav,
      'banner': banner,
      'page': page,
      'Speaker': speaker
    },
    data: () => ({
      pagename: 'Speaker page',
    }),
    async mounted () {
      let pagename= this.$route.params.page;
      if (typeof pagename !== 'undefined') {
        this.pagename = pagename;
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
    mounted() {
        this.id = this.$route.params.speaker;
    },
    computed: {
      ...mapGetters({
        pages: 'pages/pages',
      }),
    }
  }
</script>