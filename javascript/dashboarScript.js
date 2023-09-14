
const closeCardButton = document.getElementById('close-button');
const comprarIngressoButton = document.getElementById('comprar-ingresso-button');
const filmList = document.querySelector('.film-list');
const filmDetails = document.getElementById('film-details');
const filmDetailsCard = document.getElementById('film-details-card');

filmList.addEventListener('click', (event) => {
    const film = event.target.closest('.film');
    if (!film) return;

    const filmName = film.querySelector('.film-name').textContent;
    displayFilmDetails(filmName);
});

function displayFilmDetails(name) {
    filmDetailsCard.style.display = 'block';
    filmDetails.style.display = 'block';
    filmDetails.innerHTML = `<h2>${name}</h2><p>Additional information about ${name}...</p>`;
}

closeCardButton.addEventListener('click', (event) => {
    filmDetailsCard.style.display = 'none';
})

comprarIngressoButton.addEventListener('click', (event) => {
    window.location.href = `cinema.html`;
})







