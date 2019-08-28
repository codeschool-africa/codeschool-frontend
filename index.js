/*created by Benedict*/
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

    const backgroundDetails = [
        {
            image:"./images/bg-image.png",
            h1: "heading 1",
            h3: "subheading 1",
            a: "#"
        },
        {
            image:"./images/bg-image.png",
            h1: "heading 2",
            h3: "subheading 2",
            a: "#"
        },
        {
            image:"./images/bg-image.png",
            h1: "heading 3",
            h3: "subheading 3",
            a: "#"
        }
    ]
    let x = Math.floor(Math.random()*quotes.length);

    const blockQuote = document.querySelector("#quote");

    const cite = document.querySelector("#cite");

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
    }