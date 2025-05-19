import httpInstance from "../../shared/services/http.instance.js";

/**
 * @class EventService
 * @summary Service class to manage API calls related to events.
 * @description Provides methods to perform CRUD operations and search events by name through HTTP requests to the configured endpoint.
 * @author Daniel Crispin Ramos
 */
export class EventService {

    /**
     * Endpoint path for events resource, loaded from environment variables.
     * @type {string}
     */
    resourceEndpoint = import.meta.env.VITE_EVENTS_ENDPOINT_PATH;

    /**
     * Retrieves all events.
     * @returns {Promise} Promise resolving with the list of all events.
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a single event by its unique ID.
     * @param {number|string} id Unique identifier of the event.
     * @returns {Promise} Promise resolving with the event data.
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new event resource.
     * @param {Object} resource Event data to create.
     * @returns {Promise} Promise resolving with the created event response.
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing event resource by ID.
     * @param {number|string} id Unique identifier of the event to update.
     * @param {Object} resource Updated event data.
     * @returns {Promise} Promise resolving with the updated event response.
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes an event resource by ID.
     * @param {number|string} id Unique identifier of the event to delete.
     * @returns {Promise} Promise resolving with the deletion response.
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves events filtered by name.
     * @param {string} name Name to filter events by.
     * @returns {Promise} Promise resolving with events matching the name filter.
     */
    getByName(name) {
        return httpInstance.get(`${this.resourceEndpoint}?name=${name}`);
    }
}
