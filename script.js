let data = [
  {
    title: "tree shaped vase",
    price: 500,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi nobis maxime dolorem.",
    image_url: "images/image1.webp",
  },
  {
    title: "printed vase",
    price: 800,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi nobis maxime dolorem",
    image_url: "images/image2.jpeg",
  },
  {
    title: "marble vase",
    price: 1000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi nobis maxime dolorem",
    image_url: "images/image3.jpg",
  },
  {
    title: "marble vase",
    price: 1200,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi nobis maxime dolorem",
    image_url: "images/image4.jpg",
  },
  {
    title: "wooden vase",
    price: 1400,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi nobis maxime dolorem",
    image_url: "images/image5.jpg",
  },
];

let container = document.getElementById("container");

// render cards through forEach methode

data.forEach((object) => {
  let { title, price, description, image_url } = object;

  container.innerHTML += `<div class="mb-5 card" style="width: 18rem;">
    <img height="60%" src="${image_url}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p>price: ${price} RS</p>
      <p class="card-text">${description}</p>
    </div>
  </div>`;
});

// render cards through map methode

data.map((object) => {
  let { title, price, description, image_url } = object;

  container.innerHTML += `<div class="card" style="width: 18rem;">
    <img height="60%" src="${image_url}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p>price: ${price} RS</p>
      <p class="card-text">${description}</p>
    </div>
  </div>`;
});
