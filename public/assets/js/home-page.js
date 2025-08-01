document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');
    let transitioned = false;

    function transitionToContent() {
        if (transitioned) return;
        transitioned = true;

        // Làm mờ video
        videoContainer.style.transition = 'opacity 1s';
        videoContainer.style.opacity = '0';

        // Hiển thị nội dung chính tạm thời (nếu có)
        if (mainContent) {
            mainContent.style.display = 'flex';
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 50);
        }

        // Chuyển sang trang /account sau hiệu ứng mờ
        setTimeout(() => {
            window.location.href = '/account';
        }, 300); // Khớp với transition opacity 1s
    }

    document.body.addEventListener('click', transitionToContent);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            transitionToContent();
        }
    });
});