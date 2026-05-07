

// search.js
import { getLaunches } from "./api.js";
import { renderLaunches, clearLaunches, showLoading, hideLoading } from "./ui.js";

export function setupSearch() {
const container = document.createElement("div");
container.className = "search-container";

  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Search mission...";
  searchBox.id = "search-box";


container.appendChild(searchBox);
  document.body.insertBefore(container, document.getElementById("app"));

  searchBox.addEventListener("input", async (e) => {
    const query = e.target.value.toLowerCase();
    clearLaunches();
    showLoading();
    const launches = await getLaunches(0, 100); // fetch more for search
    hideLoading();

    const filtered = launches.filter(l =>
      l.mission_name.toLowerCase().includes(query)
    );
    renderLaunches(filtered);
  });
}


