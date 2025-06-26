const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const darkTheme = 'dark-theme';

// Paths to icons
const moonIcon = './Assets/Moon Black.svg';  // Light mode icon (showing moon)
const sunIcon = './Assets/Sun.svg';          // Dark mode icon (showing sun)

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme');

// Apply stored theme on load
if (selectedTheme === 'dark') {
document.body.classList.add(darkTheme);
themeIcon.src = sunIcon;
} else {
themeIcon.src = moonIcon;
}

// Toggle theme
themeButton.addEventListener('click', (e) => {
e.preventDefault(); // Prevents jumping due to anchor tag

document.body.classList.toggle(darkTheme);

const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
themeIcon.src = currentTheme === 'dark' ? sunIcon : moonIcon;

localStorage.setItem('selected-theme', currentTheme);
});

