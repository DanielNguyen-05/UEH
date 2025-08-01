document.addEventListener('DOMContentLoaded', () => {
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueTextElement = document.getElementById('dialogue-text');

    const fullText = "Welcome to the year 1514 in Thang Long, Hanoi. In front of you stands the Turtle Stele at the Temple of Literature - Quoc Tu Giam. In this round, you are a young scholar entrusted with the mission to restore an ancient stele in Thang Long - a place that preserves millennia of historical values.";

    let charIndex = 0;
    let canContinue = false;

    // --- Bắt đầu chuỗi sự kiện ---

    // 1. Hiển thị hộp thoại sau một khoảng trễ ngắn
    setTimeout(() => {
        dialogueBox.classList.add('visible');
    }, 500); // 0.5 giây

    // 2. Bắt đầu chạy chữ sau khi hộp thoại đã xuất hiện
    setTimeout(() => {
        typeWriter();
    }, 1000); // 1 giây

    
    function typeWriter() {
        if (charIndex < fullText.length) {
            dialogueTextElement.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 20); // Tốc độ gõ chữ (40ms mỗi ký tự)
        } else {
            // Khi đã gõ xong chữ
            dialogueTextElement.classList.add('completed'); // Ẩn con trỏ
            
            // Cho phép người dùng tiếp tục
            enableContinuation();
        }
    }

    function enableContinuation() {
        canContinue = true;
    }

    function proceedToNextScene() {
        if (canContinue) {
            window.location.href = '/game/word';
        }
    }

    // 3. Gắn sự kiện cho việc chuyển cảnh
    document.addEventListener('click', proceedToNextScene);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            proceedToNextScene();
        }
    });
});