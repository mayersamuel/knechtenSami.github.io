let sources = [
                './img/image0.png',
                './img/image1.png',
                './img/image2.png',
                './img/image3.png',
                './img/image4.png',
                './img/image5.png',
                './img/image6.png',
                './img/image7.png',
                './img/image8.png'
]

let images = document.getElementsByClassName('image');
console.log(images);
console.log(document.getElementsByClassName('image'));6
let currentIndex = 0;

let interval = setInterval(function () {
    rightButton(true);
    nextImageRight();
    nextImageRight();
}, 5000);


function rightButton() {
    if (currentIndex > 0) {
        --currentIndex;
    } else {
        currentIndex = sources.length;
    }

    switchURL();
    
    nextImageRight();
}


function leftButton() {
    if (currentIndex < sources.length) {
        ++currentIndex;
    } else {
        currentIndex = 0;
    }

    switchURL();

    nextImageLeft();
}

function switchURL() {
    let i = currentIndex;
    
    for (let counter = 0; counter < images.length; counter++) {
        if (i >= sources.length) {
            i = 0;
        }

        images[counter].src = sources[i];
        i++;
    }
}

function nextImageRight() {
    clearInterval(interval);

    interval = setInterval(function () {
        rightButton(true);
        nextImageRight();
    }, 5000);
}

function nextImageLeft() {
    clearInterval(interval);
    
    interval = setInterval(function () {
        leftButton(true);
        nextImageLeft();
    }, 5000);
}