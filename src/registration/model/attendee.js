/**
 * @class Attendee
 * @summary Represents an attendee with personal and event-related details.
 * @description Class modeling an event attendee, including their unique id, name, associated event id, ticket identifier, and check-in timestamp.
 * @author Daniel Crispin Ramos
 */
export class Attendee {
    /**
     * Creates an instance of Attendee.
     * @param {Object} param0 Object containing attendee properties.
     * @param {number} [param0.id=0] Unique identifier of the attendee.
     * @param {string} [param0.firstName=""] First name of the attendee.
     * @param {string} [param0.lastName=""] Last name of the attendee.
     * @param {number} [param0.eventId=0] Identifier of the event the attendee is associated with.
     * @param {string} [param0.ticketIdentifier=""] Ticket identifier assigned to the attendee.
     * @param {string} [param0.checkedInAt=""] Date and time when the attendee checked in, as a string.
     */
    constructor(
        {
            id = 0,
            firstName = "",
            lastName = "",
            eventId = 0,
            ticketIdentifier = "",
            checkedInAt = ""
        }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = checkedInAt;
    }
}
