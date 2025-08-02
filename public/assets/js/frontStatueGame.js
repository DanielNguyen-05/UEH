document.addEventListener('DOMContentLoaded', () => {
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueTextElement = document.getElementById('dialogue-text');
    const container = document.getElementById('container');

    const fullText = "Xuan La to he craft village in Phu Xuyen district, Hanoi is the only place that preserves the traditional art of making to he from sticky rice flour with vivid and colorful shapes. With hundreds of artisans practicing the profession, this place not only preserves the value of folk culture but also spreads the joy of creativity to the younger generation. Press Enter to continue!!!";

    let charIndex = 0;
    let isFinished = false;
    let isTransitioning = false;

    setTimeout(() => {
        dialogueBox.classList.add('visible');
    }, 500);

    setTimeout(() => {
        typeWriter();
    }, 1200);

    function typeWriter() {
        if (charIndex < fullText.length) {
            dialogueTextElement.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 20);
        } else {
            dialogueTextElement.classList.add('completed');
            isFinished = true;
        }
    }

    function goToApp() {
        if (isFinished && !isTransitioning) {
            isTransitioning = true;
            container.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = '/game/toy-figurine';
            }, 300); 
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            goToApp();
        }
    });

    document.addEventListener('click', () => {
        goToApp();
    });
});
