const body = document.body;
const followerCard = document.getElementsByClassName("follower-card");
const subtitle = document.getElementsByClassName("subtitle");
const overviewCard = document.getElementsByClassName("overview-card");
const toggleTheme = document.getElementById("theme-toggle");
const overviewData = document.getElementsByClassName("overview-data");
const titles = document.getElementsByTagName("h2");
const titles4 = document.getElementsByTagName("h4");
const userName = document.getElementsByClassName("user");
const topBG = document.querySelector(".top-bg");
const instagramBox = document.getElementById("instagram");

function darkMode() {
    body.classList.toggle("body-dark");
    topBG.classList.toggle("top-dark-bg");
    [...subtitle, ...titles4, ...userName].map(el => el.classList.toggle("dark-text"));
    [...overviewCard].map(el => el.classList.toggle("overview-card-dark"));
    [...overviewData].map(el => el.classList.toggle("overview-data-dark"));
    [...titles].map(el => el.classList.toggle("white-title"));
    [...followerCard].map(el => el.classList.toggle("follower-card-dark"))
    instagramBox.classList.toggle("dark-insta");
}

toggleTheme.addEventListener("click", darkMode);