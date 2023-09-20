// PROJECT9_Countdown ASSIGNMENT  

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick()
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 4000); // Change image every 4 seconds (4000 milliseconds)
}

showSlides(); // Start the slideshow