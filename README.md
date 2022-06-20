# Vue TV

### Overview
Vue TV is a Vue 3 application that allows you to browse TV Shows via [tvmaze API](https://www.tvmaze.com/api). It is two days challenge part of an interview process for a frontend job position.

<img width="205" alt="image" src="https://user-images.githubusercontent.com/12605000/174508063-3bdca6cb-b3c9-4b6e-b067-c4e2af97a465.png">
<img width="202" alt="image" src="https://user-images.githubusercontent.com/12605000/174508111-b7ea0dd5-7f27-4e5f-b1ad-2e7f3e7a6017.png">

### Getting started
You can see a temporary [Live demo](https://doblel.github.io)

Once you have cloned the repo (you can make it with `git clone https://github.com/doblel/vue-tv.git`) navigate to the project's folder, install all dependencies with `npm i` and run the project in development mode with `npm run dev` or in production mode with `npm run build && npm run preview`

Note: you may need to have installed the latest version of vue, in that case you can install it globally with `npm i -g vue@latest`

### Tech stack and requirements
- Vue 3 for the UI
- Axios for http requests
- Pinia for state management

In order to keep it simple I did not install any package or tooling that was not required. In a real world project I would use - and strongly recommend- Typescript and some css pre processor as sass/less/postcss.

#### Should I use state management for this small project?
The decision of adding an extra layer of complexity and dependencies was taken for two reasons:
1. To have all the info presented in the home page in memory because the process of getting all the shows and grouping it by genres takes time.
2. To separete all the logic from the UI components.

#### Project strucure
The project follows the recommended structure Vue proposes.

- `/components` -> all UI components, render content based on it owns props (no access to store, router, etc).
- `/views` -> all container components used in the router, they interact with the store and router and pass props to the presentational components.
- `/router` -> define routes (lazy load all but homepage).
- `/api` -> axios instance of tvmaze API and related methods.
- `/store` -> implement all the logic related to calling the API and processing the shows.
- `/utils` -> utility functions as sort shows by average rating, group by genre, etc.

#### Horizontal section component
**Disclaimer**:
This component is something I did from scratch with a few lines of javascript and css, tested in chrome (desktop and android phone) and Iphone 7+. I'm not sure if it will work in other browsers/devices.

Behavior:
- On mobile: it works with the slide gesture as we use to in other sites.
- On Desktop: uses the scroll or wheel  event to (only if you are with the cursor on top of the section) replace the vertical scroll on the page with the horizontal scroll of the slides container.

### TO DO
- [ ] Add unit tests
- [ ] Improve loading states
- [ ] Find a way to optimize image loads
- [ ] Filter shows by genre and/or rating
- [ ] List Seasons and Episodes
- [ ] Show info about the cast members
