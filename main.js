
const sections = [
    ['login', 'Окно логина'],
    ['profile', 'Мой профиль'],
    ['about', 'Об игре'],
];

const nav = document.getElementById('navigation');

for (let section of sections) {
const button = document.createElement('input');
button.setAttribute('type', 'button');
button.setAttribute('data-section', section[0]);
button.value = section[1];
nav.appendChild(button);
}