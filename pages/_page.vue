<template>
  <div>
    <div id="inner">
    <section class="hero">
      <div class="home"
       v-if="this.page && this.componentss"
      >
        <template v-for="(component, i) in this.componentss">
            <component :key="i" :is="component.default"></component>
        </template> 
      </div>
    </section>
  </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
         data: () => ({
          pagename: 'Home',
        }),
        created (store) {
          this.$store.dispatch('pages/get');
        },
        async mounted () {
          let pagename= this.$route.params.page;
          if (typeof pagename !== 'undefined') {
            this.pagename = pagename;
          }

        },
        head() {
          if (this.$route.path === "/"){ 
            return {
              script: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                  id: 'mcjs',
                  innerHTML: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/eb9cc5d08a5ecc02a40df6f40/067d4fda4995ba80e25e3726d.js");'
                }
              ]
            }
          }
        },
        computed: { 
          ...mapGetters({
            pages: 'pages/pages',
            widgets: 'widgets/widgets'
          }),
          page  () {
            let page = this.pages.filter((page) => {
              let route = this.$route.params.page;

              if (typeof route === 'undefined') {
                route = 'home'
              }

              return page.url.toString() === route;
            })[0];

            this.$store.dispatch('pages/current', page);
            this.$store.dispatch('widgets/get', page);

            return page;
          },
          componentss () {
           return this.widgets;
          }
        },
        methods: {
          async fetch({store}) {
             await store.dispatch("pages/get")
          }
        }
    }
</script>

<style>
.home {
    display: flex;
    flex-direction: column;
}
</style>
