/**
 * @class Event
 * @summary Represents an event with basic details such as id, name, description, and scheduled date.
 * @description Class modeling an event, storing its unique identifier, name, description, and scheduled date/time.
 * @author Daniel Crispin Ramos
 */
export class Event {
    /**
     * Creates an instance of Event.
     * @param {Object} param0 Object containing event properties.
     * @param {number} [param0.id=0] Unique identifier of the event.
     * @param {string} [param0.name=""] Name of the event.
     * @param {string} [param0.description=""] Brief description of the event.
     * @param {string} [param0.scheduledAt=""] Scheduled date and time of the event as a string.
     */
    constructor(
        {
            id = 0,
            name = "",
            description = "",
            scheduledAt = ""
        }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.scheduledAt = scheduledAt;
    }
}
