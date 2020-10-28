// Create a function called `myFunction()`
// YOUR CODE HERE
function myFunction() {
  const inputSearch = document.getElementById("searchTerm").value;
  let apiBase =
    "https://api.giphy.com/v1/gifs/search?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&q=";
  fetch(apiBase + inputSearch)
    .then((res) => res.json())
    .then(function (res) {
      let gifUrl = res.data[Math.floor(Math.random() * 10)].images.original.url;
      let responseContainer = document.getElementById("response-container");
      responseContainer.innerHTML = "";
      let gifImg = document.createElement("img");
      gifImg.setAttribute("src", gifUrl);
      responseContainer.appendChild(gifImg);
    });
}