<script>
/**
 * @component RegisteredEvents
 * @summary Component that fetches and displays a list of registered events and their attendees.
 * @description This Vue component uses EventService and AttendeeService to load events and attendees from the API on creation.
 * It handles errors and passes event and attendee data to the EventSummary child component for display.
 * @author Daniel Crispin Ramos
 */
import { EventService } from '../services/event.service.js';
import { AttendeeService } from '../services/attendee.service.js';
import EventSummary from './event-summary.component.vue';

export default {
  name: 'registered-events',
  components: { EventSummary },
  data() {
    return {
      events: [],
      attendees: [],
      error: null
    };
  },
  created() {
    const eventService = new EventService();
    const attendeeService = new AttendeeService();

    eventService.getAll()
        .then(res => {
          this.events = res.data;
        })
        .catch(() => {
          this.error = 'Error loading events';
        });

    attendeeService.getAll()
        .then(res => {
          this.attendees = res.data;
        })
        .catch(() => {
          this.error = 'Error loading attendees';
        });
  }
}
</script>

<template>
  <div aria-label="Registered Events">
    <h2>Registered Events</h2>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="events.length && attendees.length" class="grid p-grid">
      <div
          v-for="event in events"
          :key="event.id"
          class="col-12 md:col-6 lg:col-4"
      >
        <event-summary :event="event" :attendees="attendees" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.error {
  color: red;
  margin: 1rem 0;
}
</style>
