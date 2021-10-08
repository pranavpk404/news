// https://newsapi.org/v2/everything?q=world&from=2021-09-30&sortBy=popularity&apiKey=7c30031db4ad4e23a0c8e4638cda64a9
function p(str) {
  console.log(str);
}
// Initialize the news api parameters
let source = "the-times-of-india";
let apiKey = "7c30031db4ad4e23a0c8e4638cda64a9";
const url = `https://newsapi.org/v2/everything?q=world&from=2021-09-30&sortBy=popularity&apiKey=${apiKey}`;

const container = document.getElementById("container");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=world&from=2021-09-30&sortBy=popularity&apiKey=${apiKey}`,
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
            <p class="card-text">
              <small class="text-muted"></small>
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
