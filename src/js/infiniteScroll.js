// infiniteScroll.js
import { getLaunches } from "./api.js";
import { renderLaunches, showLoading, hideLoading, showNoMoreData } from "./ui.js";

let offset = 0;
const limit = 10;
let isFetching = false;
let hasMore = true;

export function setupInfiniteScroll() {
  window.addEventListener("scroll", async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      if (!isFetching && hasMore) {
        isFetching = true;
        showLoading();
        const launches = await getLaunches(offset, limit);
        hideLoading();

        if (launches.length > 0) {
          renderLaunches(launches);
          offset += limit;
        } else {
          hasMore = false;
          showNoMoreData();
        }
        isFetching = false;
      }
    }
  });
}

