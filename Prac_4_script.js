    let slideIndex = 0;

        function showSlides() {
            let slides = document.getElementsByClassName("slides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
           
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            slides[slideIndex - 1].style.display = "block";
        }
        let currentindex = 0;
        const slideimages = document.getElementById("slides");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        function updateSlide() {
            sliderimages.src = sliderimages[currentindex].src;
        }

        function plusSlides(n) {
            slideIndex += n;
            showSlides();
        }

        
        const faqData = [
            {
                id: 1,
                question: "What is an image slideshow?",
                answer: "An image slideshow is a presentation of images that automatically or manually transitions from one image to another. It's commonly used on websites to showcase multiple images in a compact space."
            },
            {
                id: 2,
                question: "How do I navigate through the slideshow?",
                answer: "You can navigate through the slideshow using the arrow buttons on the left and right sides of the images. The slideshow also automatically advances every 2 seconds."
            },
            {
                id: 3,
                question: "Can I customize the slideshow speed?",
                answer: "Yes, the slideshow speed can be customized by modifying the timeout value in the JavaScript code. Currently, it's set to change images every 2 seconds."
            },
            {
                id: 4,
                question: "What image formats are supported?",
                answer: "The slideshow supports all common web image formats including JPEG, PNG, GIF, and WebP. Make sure your images are web-optimized for better performance."
            },
            {
                id: 5,
                question: "How do I add more images?",
                answer: "To add more images, simply create new div elements with the class 'slides fade' and include your image with the appropriate src attribute within the slideshow container."
            },
            {
                id: 6,
                question: "Is the slideshow responsive?",
                answer: "Yes, the slideshow is responsive and will adapt to different screen sizes. The images are set to scale proportionally while maintaining their aspect ratio."
            }
        ];

       
        function createFAQItems() {
           
            var container = document.getElementById('faq-container');
            
            
            for(var i = 0; i < faqData.length; i++) {
                
                var faqHTML = '';
                faqHTML = faqHTML + '<div class="faq-item">';
                faqHTML = faqHTML + '<button class="faq-question" onclick="showHideAnswer(' + i + ')">';
                faqHTML = faqHTML + faqData[i].question;
                faqHTML = faqHTML + '</button>';
                faqHTML = faqHTML + '<div class="faq-answer" id="answer-' + i + '">';
                faqHTML = faqHTML + '<p>' + faqData[i].answer + '</p>';
                faqHTML = faqHTML + '</div>';
                faqHTML = faqHTML + '</div>';
                
                
                container.innerHTML = container.innerHTML + faqHTML;
            }
        }

        function showHideAnswer(number) {

            var answer = document.getElementById('answer-' + number);
            var question = event.target;
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                question.classList.remove('active');
            } else {
                answer.classList.add('active');
                question.classList.add('active');
            }
        }

        function showNotification(message, timeout = 5000) {
            var banner = document.getElementById('notification-banner');
            var msgSpan = document.getElementById('notification-message');
            if (!banner || !msgSpan) return;
            msgSpan.textContent = message;
            banner.classList.remove('hide');
            
            setTimeout(function() {
                banner.classList.add('hide');
            }, timeout);
        }
        var closeBtn = document.getElementById('close-banner');
        if (closeBtn) {
            closeBtn.onclick = function() {
                document.getElementById('notification-banner').classList.add('hide');
            };
        }

       
        window.onload = function() {
            showSlides(); 
            createFAQItems(); 
            
        };

