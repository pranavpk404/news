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

const container = document.getElementById("container");

// FETCHING NEWS
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`,
  true
);
if (localStorageCategory === null && localStorageCountry === null) {
  document.getElementById(
    "newsName"
  ).innerText = `Showing Headlines about General`;
} else {
  document.getElementById(
    "newsName"
  ).innerText = `Showing Headlines about ${category}`;
}
// What to do when response is ready

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element) {
      if (element === null) {
        console.log("Some Problem");
      }
      let news = `
      <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${element["title"]}</h5>
            <p class="card-text">
            ${element["description"]}
            </p>
            <a href="${element["url"]}" target="_BLANK">Click Here to read more</a>
          </div>
        </div>
      </div>
    </div>`;

      newsHtml += news;
    });
    container.innerHTML = newsHtml;
  } else {
    document.getElementById("alert").innerHTML = `
    
    <div class="alert alert-danger" role="alert">
      Some Problem Occured with Server 😢!
    </div>;`;

    console.log("Some error occured");
  }
};

xhr.send();

// Searching

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  // let noteCards = document.getElementsByClassName("noteCard");
  Array.from(container).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
