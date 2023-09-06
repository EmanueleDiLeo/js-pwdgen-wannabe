const name = prompt('Scrivi il tuo nome').replaceAll(" ","");
const surname = prompt('Scrivi il tuo cognome').replaceAll(" ","");
const favoriteColor = prompt('Scrivi il tuo colore preferito').replaceAll(" ","");
const number = '23';

const message = name + surname + favoriteColor + number;

document.getElementById('output').innerHTML = message;