document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector("body");

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "fas fa-heart";

        // Add color variety
        heart.style.color = getRandomColor();

        // Add rotation
        const rotation = getRandomRotation();
        heart.style.transform = `rotate(${rotation}deg)`;

        // Add random z-index
        const zIndex = Math.floor(Math.random() * 21) + 1;
        heart.style.zIndex = zIndex;

        heart.style.left = (Math.random() * 100) + "vw";
        heart.style.animationDuration = (Math.random() * 5) + 2 + "s";
        body.appendChild(heart);

        // Set a timer to remove the heart after a certain duration (e.g., 5 seconds)
        setTimeout(function () {
            heart.remove();
        }, 5000);
    }
    // Helper function to get a random color
    function getRandomColor() {
        const colors = ['#d14987', '#cc2e75', '#dd4e4e']; // Add more colors if needed
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Helper function to get a random rotation value
    function getRandomRotation() {
        return Math.random() * 30 - 5; // Adjust the range as needed
    }




    setInterval(createHeart, 100);

    var timelineItems = document.querySelectorAll('.timeline ul li');
    var time = document.querySelectorAll('.time');
    var activeIndex = 0;

    timelineItems.forEach(function (item, index) {
        var content = item.querySelector('.content');

        item.addEventListener('click', function () {
            if (index === activeIndex) {
                content.classList.toggle('show');
                item.classList.add('timeline-item-disabled');
                time[index].classList.remove('pulse-animation');
                activeIndex = index + 1;

                if (activeIndex < timelineItems.length) {
                    timelineItems[activeIndex].classList.remove('timeline-item-disabled');
                    timelineItems[activeIndex].style.opacity = 1;
                }

                if (activeIndex < timelineItems.length - 1) {
                    time[activeIndex].classList.add('pulse-animation');
                }

                if (activeIndex > timelineItems.length + 1) {
                    time[activeIndex].classList.remove('pulse-animation');
                }
            }
        });
    });
});
