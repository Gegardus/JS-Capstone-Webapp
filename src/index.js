import './style.css';
import { getMovies, getMovieById, countMovies } from './module/get-api';
import {
  modal, getComments, addComment, updateCount,
} from './module/modal';
import { getLikes, addLike } from './module/interact';

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

  const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  };

  getComments(movieId);
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, comment] = commentForm;
    const comme = {
      item_id: movieId,
      username: name.value,
      comment: comment.value,
    };
    addComment(comme);
    if (document.querySelector('.comments').innerHTML === '<p>No comments found</p>') {
      document.querySelector('.comments').innerHTML = '';
    }
    document.querySelector('.comments').innerHTML
    += `<li><span>${currentDate()}</span> | <span>${comme.username}:</span> ${comme.comment}</li>`;
    updateCount();
    commentForm.reset();
  });
};

const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {
  const likes = await getLikes();
  listMovie.innerHTML = '';
  const list = await getMovies();
  countMovies(list);
  list.forEach((item) => {
    let count = 0;
    const num = likes.find((like) => item.id === Number(like.item_id));
    if (num !== undefined) {
      count = num.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll('.like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      if (item.style.color !== 'skyblue') {
        item.style.color = 'skyblue';
        item.firstElementChild.innerHTML = Number(item.firstElementChild.innerHTML) + 1;
        addLike(movieId);
      }
    });
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