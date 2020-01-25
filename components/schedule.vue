<template>
    <section id="schedule" class="hero schedule">
        <div class="">
            <div class="hero-body">
                <div>
                    <app-h2
                        title="Schedule"
                        subtitle="3 days of JS Festivities around the center of London"
                        :is-h2="true"
                        :white="true"
                    >
                    </app-h2>
                </div>
                <div class="">
                    <div class="container">
                        <div class="">
                            <div class="tabs">
                                <ul class="">
                                    <li 
                                        v-for="(date, index) in Days"
                                        v-bind:key="date"
                                        :class="{'is-active':date === chosen}">
                                        <a v-on:click="select(date)">Day {{index+1}}</a>
                                    </li>
                                </ul>
                                
                            </div>
                              <app-day
                                    :items= 'schedule'
                                    :speakers= 'speakers'
                                    :day= 'selectedDate'
                                >
                                </app-day>  
                        </div>
                          
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    import day from '@/components/day';
    import { mapGetters } from "vuex";

    export default {
        data: function() {
            return {
              chosen: ""
            }
        },
        props: {
            items: Array,
            speakers: Array,
        },
        components: {
            "app-h2" : h2,
            "app-day": day
        },
        methods: {
            select: function (date) {
                this.chosen = date;
            }
        },
        mounted: function() {
            this.$store.dispatch("schedule/get");
        },
        computed: {
            ...mapGetters({
                schedule: "schedule/schedule"
            }),
            Days() {
              if (typeof this.schedule !== 'undefined') {
                  return [...new Set(this.schedule.map(date => date.date))];
              } else {
                  return [];
              }
            },
            selectedDate() {
                if (typeof this.schedule !== 'undefined') {
                   if (this.chosen === '' && this.schedule.length > 0) {
                       this.chosen = this.schedule[0].date;
                   }

                   return this.chosen
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

  .schedule
    background: $red;
    color: $white;

    .tabs
        li
          a
            background-color: transparent;
            border: none;
            color: $white;
          &.is-active 
            a
              background-color: #c90000;
              border: none;


</style>