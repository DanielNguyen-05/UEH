document.addEventListener('DOMContentLoaded', () => {
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueTextElement = document.getElementById('dialogue-text');

    const fullText = "At Dong Xuan market, the atmosphere is always bustling from early morning to late afternoon. The stalls are crowded, selling all kinds of items from traditional to modern. In the game world, this place is recreated as a bustling trading center, where players can buy and sell items, rent support pets and equip unique costumes to upgrade their characters. The colorful and diverse scenery makes Dong Xuan market a destination not to be missed on the journey of discovery.";

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
            setTimeout(typeWriter, 20); // Tốc độ gõ chữ (10ms mỗi ký tự)
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
            window.location.href = '/endGame';
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