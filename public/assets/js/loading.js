document.addEventListener('DOMContentLoaded', () => {
    const progressBarFill = document.getElementById('progress-bar-fill');
    let progress = 0;
    const loadingTime = 3000; // Thời gian tải giả lập là 3 giây (3000ms)
    const intervalTime = 30; // Cập nhật mỗi 30ms

    const interval = setInterval(() => {
        progress += (intervalTime / loadingTime) * 100;

        if (progress >= 100) {
            progress = 100;
            progressBarFill.style.width = progress + '%';
            clearInterval(interval);

            // Ví dụ: chuyển đến trang chính sau 0.5s
            setTimeout(() => {
                window.location.href = '/menu';
            }, 1000);

        } else {
            progressBarFill.style.width = progress + '%';
        }
    }, intervalTime);
});