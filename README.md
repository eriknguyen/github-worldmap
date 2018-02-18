# GitHub User World Map
*Simple webpage built with React and Google Map API and GitHub API*

## Up and Running
  * Clone this repo
  * Install dependencies
  ```
    yarn
    [or]
    npm install
  ```
  * Run dev server
  ```
    yarn run start
    [or]
    npm run start
  ```

## To-be improved
  * Consider changing to use native Google Maps API instead of using [`google-map-react`](https://github.com/istarkov/google-map-react) for better control of map components and more flexibility (Currently, the support for Google Maps - Places API is not good so it is done by native while the map itself and the marker are using `google-map-react`)
  * Find a better way to get an __exhausted__ list of Github users based on location
  * Change zoom level of the map for different countries