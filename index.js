// Initialize the news api parameters and changing it to users need

let localStorageCategory = localStorage.getItem("categoryL");
let localStorageCountry = localStorage.getItem("countryL");

let category = localStorageCategory || "technology";
let country = localStorageCountry || "in";
const newsName = document.getElementById("newsName");
console.log(category);
console.log(country);

function general() {
  categoryV = "general";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}
function science() {
  categoryV = "science";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}
function technology() {
  categoryV = "technology";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}
function entertainment() {
  categoryV = "entertainment";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}
function health() {
  categoryV = "health";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}
function sports() {
  categoryV = "sports";
  localStorage.setItem("categoryL", categoryV);
  location.reload();
}

function india() {
  countryV = "in";
  localStorage.setItem("countryL", countryV);
  location.reload();
}
function usa() {
  countryV = "us";
  localStorage.setItem("countryL", countryV);
  location.reload();
}
function australia() {
  countryV = "au";
  localStorage.setItem("countryL", countryV);
  location.reload();
}
function russia() {
  countryV = "ru";
  localStorage.setItem("countryL", countryV);
  location.reload();
}
function france() {
  countryV = "fr";
  localStorage.setItem("countryL", countryV);
  location.reload();
}
function uk() {
  countryV = "gb";
  localStorage.setItem("countryL", countryV);
  location.reload();
}

const container = document.getElementById("main");

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

// FETCHING NEWS
async function fetching() {
  showSpinner()
  let response = await fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
  );
  let news = response.json();
  // Checking for bad code
  if (response.status === 200) {
    return news;
  } else {
    document.getElementById("body").innerHTML = `
    <div class="alert">
      Some Problem Occured with Server 😢!
    </div>;`;

    console.log("Some error occured");
  }
}

if (localStorageCategory === null) {
  document.getElementById("newsName").innerText = `Latest News about General`;
} else {
  document.getElementById(
    "newsName"
  ).innerText = `Latest News about ${category}`;
}

let a = fetching();
a.then((data) => populate(data));

function populate(data) {
  let articles = data.articles;
  let newsHtml = "";
  articles.forEach(function (element) {
    let news = `
      <div class="card">
        <div class="row">
          <div class="col-md-4">
            <img src="${element["urlToImage"]}" class="img-card" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element["title"]}</h5>
              <p class="card-text">${element["description"]}</p>
              <a href="${element["url"]}" target="_BLANK">Click Here to read more</a>
            </div>
          </div>
        </div>
      </div>`;

    newsHtml += news;
  });
  container.innerHTML = newsHtml;
}
// https://saurav.tech/NewsAPI/top-headlines/category/general/in.json
