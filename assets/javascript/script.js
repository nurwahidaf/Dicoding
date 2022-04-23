const slider = document.querySelector(".slider");
        const next = document.querySelector(".next-btn");
        const prev = document.querySelector(".prev-btn");
        const slides = document.querySelectorAll(".slide-img");
        const slideIcons = document.querySelectorAll(".icon");
        const numberOfSlides = slides.length;
        let slideNumber = 0;
        
        //image slider next button
        next.addEventListener("click", () => {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });

            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });
            
            slideNumber++;
            
            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }
            
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        });
        
        //image slider previous button
        prev.addEventListener("click", () => {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });
            
            slideNumber--;
            
            if (slideNumber < 0) {
                slideNumber = numberOfSlides - 1;
            }
            
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        });

        let playSlider;
        
        let repeater = () => {
            playSlider = setInterval(function() {
                slides.forEach((slide) => {
                slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
                });
            
                slideNumber++;
            
                if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
                }
            
                slides[slideNumber].classList.add("active");
                slideIcons[slideNumber].classList.add("active");
            }, 4000);
        }

        repeater();
        
        //stop the image slider autoplay on mouseover
        slider.addEventListener("mouseover", () => {
            clearInterval(playSlider);
        });
        
        //start the image slider autoplay again on mouseout
        slider.addEventListener("mouseout", () => {
            repeater();
        });