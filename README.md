<!-- @format -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install all project dependencies by running

```
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies and Scripts

An exhaustive list of all project dependencies can be seen in the package.json, but here's a short
list highlighting the major dependencies;

- React
- Next
- Typescript
- Tailwind
- axios
- eslint
- prettier

There are 5 scripts available for use in the projects as follows;

- Dev: Start development server

```bash
  npm run dev

# or

yarn dev

```

- Build: Create production build using next build

```bash
  npm run build

# or

yarn build

```

- Start: Spin up next production server

```bash
  npm start

# or

yarn start

```

- Lint: Find potentially harmful syntax problems in the source code

```bash
  npm run lint

# or

yarn lint

```

- Format: Use Prettier formatter to enforce rules on the format of the source code

```bash
  npm run format

# or

yarn format

```

## Note

Added a component in "root/layout/\_safe-hydrate" to surpress hydration errors in the development environment.
The Next JS development server encounters a reference error when I use browser based global variables such as window and
session storage in my code. In order to bypass these errors, I call the reference these objects after mounting my components
to the DOM.
However, this causes a disparity between the server rendered page and the browser rendered page, for this reason Next JS displays an error message in the development environment after mounting the app to the DOM.
This error message will only show up if you remove the \_safe-hydrate component.

This project is hosted on firebase, you can view a live demo of the production build [here](https://movie-app-22.web.app/)

## Features

- Fully responsive UI
- Dynamic infinite movie title suggestions from uNoGS API
- Persistent state using sessionStorage API
- Empty, loading and error state UI

# Process Flow

- Empty state - user clicks to get movie suggestions
- Title search - The app sends a title search request to uNoGS API once the page is loaded and these titles are stored as suggestions
- Movie search by title - When a user clicks to get suggestions, it selects a random title from the suggestions for the search
- Movie classification - It displays results according to their types; movies, series or episodes
- Add to favourites - The user can add to favourites once the movie search results are displayed
- View movie details - Upon clicking on any of the movie cards, the app navigates to the movie page where more details of the selected movie can be seen.
- Refresh - All data persists on refresh for any given session
- New search - New search results overwrite the previous.

I created the following directories;

- components: contains the UI components used within the project
- layouts: contains the layout container components for the different pages and the safe-hydrate component
- utils: contains the API funcitons, constants, helper functions, app state and type definitions used across the project

I load static assets from cloudinary to reduce bundle size

You can check out [the project repository](https://gist.github.com/onePeterCollins/b08a9ae523e84914c3e8bfac76bdfb30) - your feedback and contributions are welcome!

```

```
