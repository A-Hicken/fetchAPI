const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      console.log(business[i]);
      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      // Adds a classname to the section element above
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);
      document.querySelector("div.cards").appendChild(card);
      //addresses
      let location = document.createElement("h2");
      location.textContent = business[i].address;
      card.appendChild(location);

      // Include a business Description
      let paragraph = document.createElement("h2");
      paragraph.textContent = business[i].description;
      card.appendChild(paragraph);
      // Create the image location, you can look up how to add image using javascript
      let image = document.createElement("img");
      image.setAttribute("src", business[i].imageurl);
      card.appendChild(image);
    }
  });
