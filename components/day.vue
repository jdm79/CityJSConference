<template>
  <section class="bordered">
    <div id="talk" class>
      <div class="columns">

        <vue-cal 
          class=" vuecal--red-theme"
          :disable-views="['years', 'year', 'month']"
          selected-date="2018-11-20"
          hide-weekends
          active-view="day"
          :events="events"
          :time-from="9 * 60"
          :time-to="19 * 60"
          :time-cell-height="30"
          :split-days="daySplits"
          :hide-weekdays="[5, 6, 7]"
          sticky-split-labels>
          <template v-slot:time-cell="{ hours, minutes }">
            <div :class="{ 'vuecal__time-cell-line': true, hours: !minutes }">
              <strong  style="font-size: 15px; color: white">{{ hours }}:{{ minutes }}{{ minutes }}</strong>
            </div>
          </template>
        </vue-cal>
      </div>
    </div>
  </section>
</template>

<script>
import h2 from "@/components/h2";
import talk from "@/components/talk";
import VueCal from "vue-cal";

export default {
  data: function() {
    return {
      chosen: null,
      open: false,
      date: {},
      events: [
        {
          start: "2018-11-20 14:00",
          end: "2018-11-20 18:00",
          title: "Need to go shopping",
          icon: "shopping_cart", // Custom attribute.
          class: "leisure"
        },
        {
          start: "2018-11-20 14:00",
          end: "2018-11-20 18:00",
          title: "Need to go shopping2",
          icon: "shopping_cart2", // Custom attribute.
          class: "leisure"
        },
        {
          start: "2018-11-22 10:00",
          end: "2018-11-22 15:00",
          title: "Golf with John",
          icon: "golf_course", // Custom attribute.
          class: "sport"
        }
      ]
    };
  },
  props: {
    items: Array,
    day: String,
    location: String
  },
  components: {
    "app-h2": h2,
    "app-talk": talk,
    "vue-cal": VueCal
  },
  methods: {
    select: function(talk) {
      this.chosen = talk;
      this.open = !this.open;

      return document.getElementById("schedule").scrollIntoView();
    },
    close: function() {
      this.open = !this.open;
    }
  },
  watch: {
    day: function(newVal, oldVal) {
      // watch it
      if (newVal !== oldVal) {
        this.chosen = null;
        this.open = false;
      }
    }
  },
  computed: {
    groups() {
      if (typeof this.items !== "undefined") {
        const locations = [
          ...new Set(
            this.items
              .filter(date => date.date === this.day)
              .map(talk => talk.location)
          )
        ];

        const talks = this.items
          .filter(date => {
            return date.date === this.day;
          })
          .sort(function(a, b) {
            return a.order - b.order;
          });

        const groups = locations.map(location => {
          return {
            location: location,
            talks: talks.filter(talk => {
              if (location === talk.location) {
                return talk;
              }
            }),
            morning: talks.filter(talk => {
              if (location === talk.location && talk.group === "morning") {
                return talk;
              }
            }),
            midday: talks.filter(talk => {
              if (location === talk.location && talk.group === "midday") {
                return talk;
              }
            }),
            afternoon: talks.filter(talk => {
              if (location === talk.location && talk.group === "afternoon") {
                return talk;
              }
            })
          };
        });

        return groups;
      } else {
        return [];
      }
    },
    talk() {
      if (typeof this.items !== "undefined") {
        const firstDate = this.items.filter(date => {
          return date.date === this.day;
        })[0];

        if (this.chosen === null) {
          this.chosen = firstDate;
        }

        return this.chosen;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~/assets/css/mq.sass';

.test
  color: blue;
  .vuecal__time-cell-label
    color: $white;

.vuecal
  color: $white;
  background: $red;
  opacity: 0.9;
  .day-split-header
   font-size: 11px;
   color: $white;

.vuecal__event
  background-color: rgba(173, 216, 230, 0.5);
  box-sizing: border-box;
  padding: 5px;
  
  &.lunch
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);


.vuecal__event 
  cursor: pointer;

.vuecal__event-title
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;

.vuecal__event-time
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: $white;

.vuecal__event-content
  font-style: italic;
  color: $white;


.vuecal__time-column 
.vuecal__time-cell 
  color: $white;

</style>