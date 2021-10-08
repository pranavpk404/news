// Initialize the news api parameters
let country = "in";
let category = "sports";

const container = document.getElementById("container");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",

  `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element) {
      let news = `<div class="card mb-3">
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
            <a href="${element["url"]}">Click Here to read more</a>
          </div>
        </div>
      </div>
    </div>`;

      newsHtml += news;
    });
    container.innerHTML = newsHtml;
  } else {
    document.getElementById(
      "alert"
    ).innerHTML = `    <div class="alert alert-danger" role="alert">
      Some Problem Occured with Server 😢!
    </div>;`;

    console.log("Some error occured");
  }
};

xhr.send();

// https://github.com/SauravKanchan/NewsAPI
