import axios from "axios";

/**
 * @module httpInstance
 * @summary Axios HTTP client instance configured with base URL and default headers.
 * @description Creates and exports a pre-configured Axios instance for making HTTP requests with JSON content type and CORS headers.
 * The base URL is loaded from environment variables.
 * @author Daniel Crispin Ramos
 */
const httpInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export default httpInstance;
