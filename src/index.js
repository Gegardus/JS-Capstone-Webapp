import './style.css';
import { getMovies, getMovieById } from './module/get-api';
import modal from './module/modal';
import { getLikes } from './module/interact';

const displayMovie = (movie, like = null) => `<div class="card">
                    <div>
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div>
                        <h3> ${movie.name} </h3>
                        <p class="likes"> <i class="fas fa-heart like" data-id="${movie.id}"> <span class="num"> ${like} </span> </i>  likes </p>
                        <button class="btn" data-id="${movie.id}"> comments </button>
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
  const likes = await getLikes();
  listMovie.innerHTML = '';
  const list = await getMovies(); 
  list.forEach((item) => {
    let count = 0;
    const tin = likes.find((like) => item.id === Number(like.item_id));
    if (tin !== undefined) {
      count = tin.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const btn = document.querySelectorAll('.btn');
  btn.forEach((item) => {
    item.addEventListener('click', async () => {
      const movieId = item.getAttribute('data-id');
      displayModal(movieId);
    });
  });
};

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {   
   method: 'POST',    
   body: JSON.stringify({ 
     name: "Vahan" }),   
   headers: {      
  'Content-type': 'application/json; charset= UTF-8',    
}
}).then(respons => respons.json())
.then(data => console.log(data))

moviesComponent();