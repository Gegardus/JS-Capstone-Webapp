import './style.css';
import getMovies from './module/get-api';

const displayMovie = (movie) => `<div class="card">
                    <div><img class="card-img" src="${movie.image.medium}"></div>
                    <div>
                    <h3>${movie.name}</h3>
                    <p class="likes"> <i class="fas fa-heart"></i> <span> N </span> likes </p>
                    <button class="btn">comments</button>
                    </div>
                    </div>`;

const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {
  listMovie.innerHTML = '';
  const list = await getMovies();
  list.forEach((item) => {
    listMovie.innerHTML += displayMovie(item);
  });
};

moviesComponent();

