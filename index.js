window.onload = function (){
    const quotes = [
       {
           quote:"The biggest wall you've gotta climb is the one you build in your mind",
           author:"Anonymous"
       },
       {
           quote:"Do your future a favor and work hard",
           author:"Anonymous"
       },
       {
           quote:"Whether you want to uncover the secrets of the universe or want to pursue a carrier in the 21st century, basic computer programming is an essential skill to learn",
           author:"Stephen Hawking"
       },
       {
           quote:"There are people less qualified than you, doing things you want to do, simply because they decided to take action",
           author:"Jack Ma"
       },
       {
           quote:"As long as you are alive, you have a better chance to better your best",
           author:"Anonymous"
       },
       {
           quote:"The only regrets we'll ever have are the chances we didn't take",
           author:"Anonymous"
       },
       {
           quote:"Even in success, I reflect over what could have been better",
           author:"MO Dewji"
       }
    ];

    let x = Math.floor(Math.random()*quotes.length);

    const blockQuote = document.querySelector("#quote");

    const cite = document.querySelector("#cite");

    // const heading = document.querySelector('#heading');

    // const subHeading = document.querySelector('#subheading');

    // const sliderLink = document.querySelector('#slider-link');

    // const bgSliderImage = document.querySelector('#bg-slider-image');

    blockQuote.innerHTML = quotes[x].quote;

    cite.innerHTML ="-" + quotes[x].author;

    // blockQuote.innerHTML += "<br><br>- "+ cite.innerHTML;

    const displayQuotes = () => {
        let number = Math.floor(Math.random()*quotes.length);
        blockQuote.innerHTML = quotes[number].quote;
        cite.innerHTML ="-"+ quotes[number].author;
    // blockQuote.innerHTML += "<br>- "+ cite.innerHTML;
    }
    
    setInterval (displayQuotes, 7500);
// <<<<<<< HEAD

    const img = document.querySelector('#img');
    const images = [
        {
            image: "./images/bgp-2.jpg",
            h1: 'service one',
            h3: 'subheading service one',
            src: '#'
        },
        {
            image: "./images/bgp.jpg",
            h1: 'service two',
            h3: 'subheading service two',
            src: '#'
        }
    ]
    
    let a = 0;
    
    const slide = () => {
        if(a < images.length) {
            a++;
        } else {
            a = 1;
        }
    
        img.innerHTML = `<div class="slider-color">
            <img src='${images[a-1].image}' id='img-slide-${a-1}'>
            <div class="slider-details">
                <h1>${images[a-1].h1}</h1>
                <h3>${images[a-1].h3}</h3>
                <a href="${images[a-1].src}">Learn more</a>
            </div>
        </div>`
    }
    
    setInterval(slide, 5000);

    // heading.innerHTML = backgroundDetails[0].h1;

    //     subHeading.innerHTML = backgroundDetails[0].h3;

    //     sliderLink.href = backgroundDetails[0].a;

    //     bgSliderImage.style.backgroundImage = `url(${backgroundDetails[0].image})`;

    // const slider = () => {
    //     let x = 0;

    //     if(x < backgroundDetails.length) {
    //         x++;
    //     } else {
    //         x = 0;
    //     }

    //     heading.innerHTML = backgroundDetails[x].h1;

    //     subHeading.innerHTML = backgroundDetails[x].h3;

    //     sliderLink.href = backgroundDetails[x].a;

    //     bgSliderImage.style.backgroundImage = `url(${backgroundDetails[x].image})`;
        
    // }

    // setInterval(slider, 2000);
    }
// =======
    
// >>>>>>> 02d8bb91d24464df27be8e9e4a92a1529ac239a8
