document.addEventListener('DOMContentLoaded', () => {
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueTextElement = document.getElementById('dialogue-text');

    const fullText = "In this round, you will take on the role of a To He artisan - a part of Vietnam's traditional folk culture. Your task is to use tools like molding, stretching, and coloring to recreate the given figure within a time limit. The AI will evaluate your work based on accuracy. If your accuracy score is over 80%, you win this round. You can also click the icon to create a group and compete with friends.";
    
    let charIndex = 0;

    // 1. Hiển thị hộp thoại sau một khoảng trễ
    setTimeout(() => {
        dialogueBox.classList.add('visible');
    }, 500);

    // 2. Bắt đầu chạy chữ sau khi hộp thoại xuất hiện
    setTimeout(() => {
        typeWriter();
    }, 1200);

    function typeWriter() {
        if (charIndex < fullText.length) {
            dialogueTextElement.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 20);
        } else {
            // Khi đã gõ xong chữ, ẩn con trỏ đi
            dialogueTextElement.classList.add('completed');
        }
    }

    // 3. Bắt sự kiện phím Enter sau khi chữ chạy xong
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && charIndex >= fullText.length) {
            window.location.href = '/game/gift-statue';
        }
    });
});
