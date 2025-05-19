<script>
export default {
  name: 'event-summary',
  props: {
    event: { type: Object, required: true },
    attendees: { type: Array, required: true }
  },
  methods: {
    registeredAttendees() {
      return this.attendees.filter(a => a.eventId === this.event.id);
    },
    registeredCount() {
      return this.registeredAttendees().length;
    },
    attendancePercentage() {
      const registered = this.registeredAttendees();
      const total = registered.length;
      if (total === 0) return 0;
      const checkedInCount = registered.filter(a => a.checkedInAt).length;
      return Math.round((checkedInCount / total) * 100);
    }
  }
}
</script>

<template>
  <pv-card class="event-card w-full" style="min-height: 150px;">
    <template #header>
      <div class="card-header">
        <h3>{{ event.name }}</h3>
      </div>
    </template>

    <template #content>
      <div class="event-description">
        {{ event.description }}
      </div>
    </template>

    <template #footer>
      <div class="p-d-flex p-jc-between p-ai-center card-footer">
        <div><strong>Registered Attendees:</strong> {{ registeredCount() }}</div>
        <div><strong>Attendance :</strong> {{ attendancePercentage() }}%</div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.event-card {
  background-color: white;
  color: black;
  margin: 1rem 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.event-description {
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.4;
  color: #222;
  padding: 0 1rem;
  flex-grow: 1;
}

.card-footer {
  font-size: 0.9rem;
  color: #333;
  padding: 0.5rem 1rem;
  border-top: 1px solid #eee;
}
</style>
