document.addEventListener('DOMContentLoaded', () => {
    const descriptionPanel = document.getElementById('description-panel');
    const titleBar = document.getElementById('title-bar');

    const textElements = document.querySelectorAll('.description-panel > h3, .description-panel > p, .description-panel > ul > li');

    let isFinished = false;

    // 1. Hiện panel và title
    setTimeout(() => {
        descriptionPanel.classList.add('visible');
        titleBar.classList.add('visible');
    }, 500);

    // 2. Hiện dần từng dòng chữ
    setTimeout(() => {
        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('text-visible');
            }, index * 150);
        });

        // 3. Sau khi toàn bộ text hiện xong
        const totalDelay = textElements.length * 150;
        setTimeout(() => {
            isFinished = true;
        }, totalDelay + 300); // +300ms buffer
    }, 1000);

    // 4. Nhấn Enter để chuyển trang
    document.addEventListener('keydown', (e) => {
        if (isFinished && e.key === 'Enter') {
            window.location.href = '/game/gift-word';
        }
    });
});
