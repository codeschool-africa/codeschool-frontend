const img = document.querySelector('#img');
const images = [
    "./images/bgp-2.jpg",
    "./images/bgp.jpg",
    "./images/bg-image.png"
]

let x = 0;

const slide = () => {
    if(x < images.length) {
        x++;
    } else {
        x = 1;
    }

    img.innerHTML = `<img src='${images[x-1]}' id='img-slide-${x-1}'>`
}

setInterval(slide, 3000)