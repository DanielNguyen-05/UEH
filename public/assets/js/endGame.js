document.addEventListener('DOMContentLoaded', () => {
    const logOutButton = document.getElementById('logout-btn');
    const reExperienceButton = document.getElementById('re-experience-btn');

    if (reExperienceButton) {
        reExperienceButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/menu';
        });
    }

    if (logOutButton) {
        logOutButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/';
        });
    }
});
