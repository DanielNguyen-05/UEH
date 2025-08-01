document.addEventListener('DOMContentLoaded', () => {
    const returnButton = document.getElementById('return-button');
    const collectButton = document.getElementById('collect-button');
    const nextButton = document.getElementById('next-button');

    if (collectButton) {
        collectButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("Nút Collect All được nhấn!");
            // TODO: Logic thu thập
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/game/statue';
        });
    }

    if (returnButton) {
        returnButton.addEventListener('click', (event) => {
            // kệ nó đi
        });
    }

    // 👉 Bắt sự kiện nhấn Enter
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            window.location.href = '/game/statue';
        }
    });
});
