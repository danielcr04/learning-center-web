/**
* @file README.md
* @description Eventify - Web Application for Event Management
* @author Daniel Crispín Ramso
  */

/**
* @section Description
* Eventify is an event management platform for seamless planning and execution,
* focusing on attendee check-ins and event tracking via a web frontend.
*/
    
/**
* @section Features
* - **Toolbar**: Logo (Clearbit API), menu ("Home", "Check-In"), language switch (EN/ES).
* - **Home View**: Displays "Welcome to Eventify" and a grid of registered events.
* - **Check-In View**: Ticket validation form that checks-in attendees and updates the backend.
* - **Page Not Found**: Custom page for unsupported routes with redirection to Home.
    */

/**
* @section Technologies
* - **Frontend**: Vue 3, Vite, PrimeVue.
* - **Backend**: JSON Server (mock API).
* - **UI/UX**: PrimeFlex, PrimeIcons, Vue-i18n.
* - **Communication**: Axios for API calls.
    */

/**
* @section Installation
* 1. Clone the repository:
*    ```bash
*    git clone <repo_url>
*    cd <project_directory>
*    ```
* 2. Install dependencies:
*    ```bash
*    npm install
*    ```
* 3. Run development server:
*    ```bash
*    npm run dev
*    ```
* 4. Start mock backend:
*    ```bash
*    cd server
*    json-server --watch db.json
*    ```
*/

/**
* @section Contributing
* 1. Fork the repository.
* 2. Create a new branch for each feature or fix.
* 3. Open a Pull Request with a clear description of changes.
     */

/**
* @section Author
* Daniel Crispín Ramso
  */



//instalar dependencias
npm install axios primevue primeflex primeicons  vue-router@4 vue-i18n pinia
npm i -g json-server@0.17.4

//Crear los environments

//Crear locales(es.json y en.json)

//Agregar archivo i18n.js

//Agregar archivo router/index.js

//Actualizar el style.css

//Agregar carpeta server

//Agregar archivo main.js

//Crear carpeta Shared
components()
services(http.instance)

//Crear la carpeta public (quitar el ".componente" del name)
components(footer,language,tolbar)
pages(Home, not found)

//Registration (mi bounded)
model(events, attendee)
services(event.service y attendee.service)
components()















