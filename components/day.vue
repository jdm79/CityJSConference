<template>
  <section class="bordered">
    <div id="talk" class>
      <div class="columns">

        <vue-cal :disable-views="['years', 'year', 'month']"
          selected-date="2018-11-20"
          hide-weekends
          active-view="day"
          :events="events"
          :time-from="9 * 60"
          :time-to="19 * 60"
          :split-days="daySplits"
          :hide-weekdays="[5, 6, 7]"
          sticky-split-labels>
          <template v-slot:event="{ event, view }">
            <v-icon>{{ event.icon }}</v-icon>

            <div class="vuecal__event-title" v-html="event.title" />
            <!-- Or if your events are editable: -->
            <div
              class="vuecal__event-title vuecal__event-title--edit"
              contenteditable
              @blur="event.title = $event.target.innerHTML"
              v-html="event.title"
            />

            <small class="vuecal__event-time">
              <!-- Using Vue Cal injected Date prototypes -->
              <strong>Event start:</strong>
              <span>{{ event.start.formatTime("h O'clock") }}</span>
              <br />
              <strong>Event end:</strong>
              <span>{{ event.end.formatTime("h O'clock") }}</span>
            </small>
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

.vuecal
  color: $white;
  background: $black;
  .day-split-header
   font-size: 11px;
   color: $white;

</style>