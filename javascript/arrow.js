window.onload = (event) => {
    document.getElementById("slide-header").innerHTML = slides[0].h;
    document.getElementById("slide-info").innerHTML = slides[0].p;
};
  

let imgSrc = document.getElementById("hero").getAttribute("src");

let images = ["./images/desktop-image-hero-1.jpg","./images/desktop-image-hero-2.jpg","./images/desktop-image-hero-3.jpg"];
let slides = [
    {
        h: "Discover innovative ways to decorate",
        p: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        h: 'Manufactured with the best materials',
        p: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    },
    {
        h: 'About our furniture',
        p: `Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.`
    }
];

let currPos = images.indexOf(imgSrc);


function leftArrow() {
    currPos += -1;
    if(currPos < 0){
        currPos = images.length -1;
    }

    let img = document.getElementById("hero");
    img.setAttribute("src",images[currPos]);

    document.getElementById("slide-header").innerHTML = slides[currPos].h;
    document.getElementById("slide-info").innerHTML = slides[currPos].p;
};

function rightArrow() {
    currPos += 1;
    if(currPos > 2){
        currPos = 0;
    }
   
    let img = document.getElementById("hero");
    img.setAttribute("src",images[currPos]);

    document.getElementById("slide-header").innerHTML = slides[currPos].h;
    document.getElementById("slide-info").innerHTML = slides[currPos].p;
}