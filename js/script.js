const name = prompt('Scrivi il tuo nome').trim();
const surname = prompt('Scrivi il tuo cognome').trim();
const favoriteColor = prompt('Scrivi il tuo colore preferito').trim();
const number = '23';

const message = name + surname + favoriteColor + number;

document.getElementById('output').innerHTML = message;