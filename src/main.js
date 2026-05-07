import './css/style.css';
import { setupSearch } from './js/search.js';
import { renderLaunches } from './js/ui.js';
import { getLaunches } from './js/api.js';
import { setupInfiniteScroll } from './js/infiniteScroll.js';

export let allLaunches = []; // global store
export let currentQuery = ""; // current search text


console.log('SpaceX App started');

// setup search bar
setupSearch();

// initial render
(async () => {
  const launches = await getLaunches(0, 20);
  allLaunches = launches;
  renderLaunches(launches);
})();

// setup infinite scroll
setupInfiniteScroll();
