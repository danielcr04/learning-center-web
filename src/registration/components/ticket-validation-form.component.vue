<script>
/**
 * @component TicketValidationForm
 * @summary Component for validating and checking in attendees by ticket identifier.
 * @description Provides a form where users can enter their ticket ID to validate and perform check-in.
 * Uses AttendeeService and EventService to verify tickets, update check-in status, and retrieve event details.
 * Handles loading state, validation results, and error display.
 * @author Daniel Crispin Ramos
 */

import { AttendeeService } from '../services/attendee.service.js';
import { EventService } from '../services/event.service.js';

export default {
  name: 'ticket-validation-form',
  data() {
    return {
      ticketIdentifier: '',
      validationResult: null,
      attendeeData: null,
      eventData: null,
      error: null,
      loading: false,
    };
  },
  methods: {
    onCheckIn() {
      this.error = null;
      this.validationResult = null;
      this.attendeeData = null;
      this.eventData = null;

      if (!this.ticketIdentifier.trim()) {
        this.error = 'Please enter a Ticket Identifier.';
        return;
      }

      this.loading = true;

      const attendeeService = new AttendeeService();
      const eventService = new EventService();

      attendeeService.getAll()
          .then(res => {
            const attendee = res.data.find(a => a.ticketIdentifier === this.ticketIdentifier.trim());

            if (!attendee) {
              this.validationResult = 'invalid';
              this.loading = false;
              return Promise.reject('Invalid ticket');
            }

            if (attendee.checkedInAt) {
              this.validationResult = 'already-checked-in';
              this.attendeeData = attendee;
              this.loading = false;
              return Promise.reject('Already checked in');
            }

            const now = new Date().toISOString();

            return attendeeService.update(attendee.id, { ...attendee, checkedInAt: now })
                .then(() => {
                  this.attendeeData = { ...attendee, checkedInAt: now };
                  return eventService.getById(attendee.eventId);
                });
          })
          .then(eventRes => {
            this.validationResult = 'success';
            this.eventData = eventRes.data;
          })
          .catch(err => {
            if (err !== 'Invalid ticket' && err !== 'Already checked in') {
              this.error = 'Error during check-in. Please try again.';
            }
          })
          .finally(() => {
            this.loading = false;
          });
    }
  }
};
</script>


<template>
  <div class="ticket-validation-form">
    <form @submit.prevent="onCheckIn" aria-label="Ticket Validation Form">
      <label for="ticketInput" class="label-form">Ticket Validation</label>
      <input
          id="ticketInput"
          type="text"
          v-model="ticketIdentifier"
          aria-required="true"
          placeholder="Enter your ticket ID"
      />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Checking...' : 'Check-In' }}
      </button>
    </form>

    <div v-if="error" role="alert" class="error-message">{{ error }}</div>

    <div v-if="validationResult === 'invalid'" class="validation-message" role="alert" style="color: red;">
      Invalid Ticket Identifier
    </div>

    <div v-if="validationResult === 'already-checked-in'" class="validation-message" role="alert" style="color: orange;">
      Already Checked-In
      <div class="details">
        <p><strong>Event ID:</strong> {{ attendeeData.eventId }}</p>
        <p><strong>Ticket ID:</strong> {{ attendeeData.ticketIdentifier }}</p>
        <p><strong>Checked-In At:</strong> {{ attendeeData.checkedInAt }}</p>
      </div>
    </div>

    <div v-if="validationResult === 'success'" class="validation-message" role="alert" style="color: green;">
      Successfully Checked-In!
      <div class="details">
        <p><strong>Event ID:</strong> {{ eventData.id }}</p>
        <p><strong>Event Name:</strong> {{ eventData.name }}</p>
        <p><strong>Event Description:</strong> {{ eventData.description }}</p>
        <p><strong>Attendee First Name:</strong> {{ attendeeData.firstName }}</p>
        <p><strong>Attendee Last Name:</strong> {{ attendeeData.lastName }}</p>
        <p><strong>Checked-In At:</strong> {{ attendeeData.checkedInAt }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.ticket-validation-form {
  max-width: 400px;
  margin: 1rem auto;
  margin-top: 5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007ad9;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #7eaaf9;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #005bb5;
}

.error-message {
  color: #d9534f;
  margin-top: 0.5rem;
}

.validation-message {
  margin-top: 1rem;
  font-weight: 600;
}

.details {
  margin-top: 0.5rem;
  font-weight: normal;
}

.label-form{
  color:black;
  text-align: center;
}
</style>