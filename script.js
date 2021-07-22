 const images = [
  {
    name: "Picture 1",
    img: "./img/photo-1447301034957-48240910db11.jpg",
  },
  {
    name: "Picture 2",
    img: "./img/photo-1625914613269-e22736627546.jpg",
  },
  {
    name: "Picture 3",
    img: "./img/photo-1625939314225-1b285a7d00c0.jpg",
  },
  {
    name: "Picture 4",
    img: "./img/photo-1625974167082-c5080eafe61e.jpg",
  },
];
let index = 0;
let counter = images.length

showSlide(index);


document.querySelector(".fa-arrow-left").addEventListener("click", () => {
    index--;
    showSlide(index);
    console.log(index)
})
document.querySelector(".fa-arrow-right").addEventListener("click", () => {
    index++;
    showSlide(index);
    console.log(index)
})

function showSlide(i) {

    index = i;
    if (i < 0) {
        index = counter -1
    }
    if (i >= counter) {
        index = 0
    }

    document.querySelector(".title").textContent = images[index].name;

document.querySelector(".picture").setAttribute("src", images[index].img);
}

