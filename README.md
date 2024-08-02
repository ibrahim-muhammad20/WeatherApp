Read me---

Website deployed:https://weatherappdistrict.netlify.app/

For the Weather App project, I employed several key technologies:

- Styled Components: To handle styling, ensuring there were no clashes with CSS class names.
- Redux Toolkit: For state management. This approach allowed me to keep functions and state implementation straightforward and flexible, eliminating the need for prop drilling between sibling components.
- React: Used for building the user interface. By leveraging Redux for state changes, I could efficiently manage and display data without relying on prop passing. I utilized `useSelector` to retrieve and display state data as needed.

Instead of creating a fetch API function within Redux, I implemented the API call in `Searchbar.js` using Axios to query the weather API. The API key is stored in a configuration file for convenience. Additionally, I integrated a weather logo into the interface to enhance the app’s completeness.

Initially, I faced challenges with navigating Redux Toolkit data as it wasn't coming properly in useselector, but Redux DevTools helped streamline this process. I thought of using '.env' at start but since the data didn't look like a confidential type I placed it in config.js

Also I initially started with Redux but there were depreciation issues coming in creating a store so I used Redux toolkit so Without having to create diff files for reducer,Action,ActionType I just used one WeatherSlicer
which made everything more fun and easy.
