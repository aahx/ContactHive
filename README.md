<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1 align="center">Contact Hive</h1>

  <p align="center">
    Contact Hive is a web application that serves as a contact list holder. It is built using the new version of React Router (6.10.0) and uses Vite as its bundler.
    <br />
    <br />
    <a href="https://contacthive.netlify.app/" target="_blank"><strong>Live Link »</strong></a>
    <br />
    <br />
    Check out <a href="https://reactrouter.com/en/main">the docs at reactrouter.com</a>
  </p>
</div>

<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#functionality">Functionality</a>
      <ul>
        <li><a href="#routing">Routing</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#hooks">Hooks</a></li>
        <li><a href="#miscellaneous">Miscellaneous</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- Demo -->
## Demo

https://user-images.githubusercontent.com/105463926/231926319-d8751e33-1c0c-4395-a4bd-d6fe3415f2c7.mp4

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Built With -->
## Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Functionality -->
## Functionality

<!-- Routing -->
### Routing

- **Index Route:** Index routes render into their parent's Outlet at their parent's URL (like a default child route).
- **Nested Routes:** Coupling segments of the URL to component hierarchy and data.
- **Dynamic Segments:** Segments of the URL can be dynamic placeholders that are parsed and provided to various APIs. Example: `<Route path="projects/:projectId/tasks/:taskId">`
- **Pathless Routes:** Routes that do not have a specific URL path, such as the route for displaying a "not found" error page.

<!-- Componentes -->
### Components

- **Outlet:** A placeholder component that allows nested routes to be rendered within the parent route.
- **Link:** A component used to navigate between routes.
- **NavLink:** A special kind of Link that knows whether or not it's "active" or "pending."
- **Active Link Styling Using NavLink**
- **Form:** The Form component is a wrapper around a plain HTML form that emulates the browser for client-side routing and data mutations. It is not a form validation/state management library like you might be used to in the React ecosystem (for that, we recommend the browser's built-in HTML Form Validation and data validation on your backend server).

<!-- Hooks -->
### Hooks

- **useNavigate:** A hook provided by React Router that enables programmatic navigation and allows adding global pending UI.
- **useNavigation:** This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations.
- **useLoaderData:** This hook provides the value returned from your route loader.
- **useFetcher:** To call a loader outside of navigation, or call an action (and get the data on the page to revalidate) without changing the URL. Multiple mutations in-flight at the same time. Many interactions with the server aren't navigation events. This hook lets you plug your UI into your actions and loaders without navigating.
- **useSearchParams:** The useSearchParams hook is used to read and modify the query string in the URL for the current location.

<!-- Miscellaneous -->
### Miscellaneous

- **Localforage:** A library used for storing data in the browser's local storage.
- **Match-Sorter:** A library used for sorting and searching arrays of data.
- **Vite:** A bundler used for building the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Michael Kim - [in/michaelkim3/](https://www.linkedin.com/in/michaelkim3/) - michael.dev.kim@gmail.com

Project Link - [https://contacthive.netlify.app/](https://contacthive.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [React Router v6 Tutorial](https://reactrouter.com/en/main)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michaelkim3/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
