import './style.css';
import { getMovies, getMovieById } from './module/get-api';
import modal from './module/modal';

const displayMovie = (movie) => `<div class="card">
                    <div><img class="card-img" src="${movie.image.medium}"></div>
                    <div>
                    <h3>${movie.name}</h3>
                    <p class="likes"> <i class="fas fa-heart"></i> <span> N </span> likes </p>
                    <button class="btn" data-id="${movie.id}">comments</button>
                    </div>
                    </div>`;

const modalHolder = document.querySelector('.modal');
const displayModal = async (movieId) => {
  const movie = await getMovieById(movieId);
  modalHolder.innerHTML = modal(movie);
  const popContainer = document.querySelector('.popup-container');
  popContainer.style.display = 'block';
  popContainer.style.visibility = 'visible';
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popContainer.style.display = 'none';
    popContainer.style.visibility = 'hidden';
  });
}
const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {
  listMovie.innerHTML = '';
  const list = await getMovies();
  list.forEach((item) => {
    listMovie.innerHTML += displayMovie(item);
  });

  const btn = document.querySelectorAll('.btn');
  btn.forEach((item) => {
    item.addEventListener('click', async () => {
      const movieId = item.getAttribute('data-id');
      displayModal(movieId);
    });
  });
};

moviesComponent();