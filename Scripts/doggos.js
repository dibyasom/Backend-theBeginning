const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL); //Way of doing AJAX
const doggos = document.querySelector(".doggos");
promise
  //Fetching takes time, hence .then waits till it gets.
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    console.log(processedResponse);
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Failed to load cute doggo :(";
    // img.width = "300px";
    console.log(img);
    doggos.appendChild(img);
  });

console.log("this will log first");
