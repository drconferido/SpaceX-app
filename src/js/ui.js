// ui.js
const app = document.getElementById("app");

export function renderLaunches(launches) {
  launches.forEach(launch => {
    const card = document.createElement("div");
    card.className = "launch-card";

    // status badge logic
    let status = launch.upcoming
      ? "upcoming"
      : (launch.launch_success ? "success" : "failed");


// compute years since launch
    const launchDate = new Date(launch.launch_date_utc);
    const now = new Date();
    const yearsAgo = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24 * 365));


    card.innerHTML = `
      <div class="card-header">
        <h3>${launch.mission_name}</h3>
        <span class="status ${status}">${status}</span>
      </div>
      <div class="card-body">
        ${launch.links.mission_patch_small
          ? `<img src="${launch.links.mission_patch_small}" alt="patch" class="patch">`
          : `<div class="no-image">No image yet</div>`}
        <p class="details">${launch.details ? launch.details : "No details available."}</p>
      </div>
      <div class="card-footer">
        ${launch.links.article_link ? `<a href="${launch.links.article_link}" target="_blank">Article</a>` : ""}
        ${launch.links.video_link ? `<a href="${launch.links.video_link}" target="_blank">Video</a>` : ""}
         <span class="age">Launched ${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago</span>
        <button class="view-btn">VIEW</button>
      </div>
    `;

    // Attach event listener sa VIEW button
    const viewBtn = card.querySelector(".view-btn");
    const details = card.querySelector(".details");

 viewBtn.addEventListener("click", () => {
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    viewBtn.textContent = "HIDE";
  } else {
    details.style.display = "none";
    viewBtn.textContent = "VIEW";
  }
});


    app.appendChild(card);
  });
}

export function showLoading() {
  const loader = document.createElement("div");
  loader.id = "loader";
//   loader.textContent = "Loading...";
 loader.className = "spinner"; // apply spinner style
  app.appendChild(loader);
}

export function hideLoading() {
  const loader = document.getElementById("loader");
  if (loader) loader.remove();
}

export function showNoMoreData() {
  const msg = document.createElement("div");
  msg.className = "end-message";
  msg.textContent = "End of list.";
  app.appendChild(msg);
}

export function clearLaunches() {
  app.innerHTML = "";
}
