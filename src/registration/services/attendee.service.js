import httpInstance from "../../shared/services/http.instance.js";

/**
 * @class AttendeeService
 * @summary Service class to manage API calls related to attendees.
 * @description Provides methods to perform CRUD operations and search attendees by name through HTTP requests to the configured endpoint.
 * @author Daniel Crispin Ramos
 */
export class AttendeeService {

    /**
     * Endpoint path for attendees resource, loaded from environment variables.
     * @type {string}
     */
    resourceEndpoint = import.meta.env.VITE_ATTENDEES_ENDPOINT_PATH;

    /**
     * Retrieves all attendees.
     * @returns {Promise} Promise resolving with the list of all attendees.
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a single attendee by their unique ID.
     * @param {number|string} id Unique identifier of the attendee.
     * @returns {Promise} Promise resolving with the attendee data.
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new attendee resource.
     * @param {Object} resource Attendee data to create.
     * @returns {Promise} Promise resolving with the created attendee response.
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing attendee resource by ID.
     * @param {number|string} id Unique identifier of the attendee to update.
     * @param {Object} resource Updated attendee data.
     * @returns {Promise} Promise resolving with the updated attendee response.
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes an attendee resource by ID.
     * @param {number|string} id Unique identifier of the attendee to delete.
     * @returns {Promise} Promise resolving with the deletion response.
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves attendees filtered by name.
     * @param {string} name Name to filter attendees by.
     * @returns {Promise} Promise resolving with attendees matching the name filter.
     */
    getByName(name) {
        return httpInstance.get(`${this.resourceEndpoint}?name=${name}`);
    }
}
