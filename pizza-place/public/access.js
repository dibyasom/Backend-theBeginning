document.querySelector(".fetch").addEventListener("click", function () {
  fetch("/lmao")
    .then(function (res) {
      return res.json();
    })
    .then(function (processedMessage) {
      document.querySelector(".status-board").innerHTML =
        processedMessage.complement;
    })

    .catch(function (err) {
      console.log(err);
    });
});

document.querySelector(".fetchDoggo").addEventListener("click", function () {
  const doggAPI = "https://dog.ceo/api/breeds/image/random";
  fetch(doggAPI)
    .then((res) => {
      return res.json();
    })

    .then((doggoImg) => {
      // console.log(doggoImg);
      img = document.createElement("img");
      img.src = doggoImg.message;
      img.alt = "Failed grabbing doggon :(";
      document.querySelector(".status-board").appendChild(img);
    })

    .catch((err) => {
      console.log(err);
    });
});
