import {
  appId,
  baseURL,
} from './interact';

export const modal = (movie) => `<div class="popup-container">
                <div class="popup">
                    <button class="btn close">Close</button>
                    <div class="details">
                        <img class="img" src="${movie.image.medium}" height="450" width="370"/>
                        <div class="summary">
                            <ul class="info">
                                <li><h1> ${movie.name} </h1></li>
                                <li> Language: ${movie.language}</li>
                                <li> Premiered: ${movie.premiered}</li>
                                <li> Rating: ${movie.rating.average}</li>
                                <li> Network: ${movie.network.name}</li>
                            </ul>
                            <p> ${movie.summary} </p>
                        </div>                      
                    </div>
                  
                    <div>
                        <h2 id="count"> Comments  </h2>
                        <ul class="comments">
                        </ul>
                    </div>
                    <div>
                        <form id="comment-form" name="comment-form" class="details">
                            <input type="text" name="name" placeholder="Your name" required/>
                            <input type="text" name="comment" placeholder="Leave a comment" required/>
                            <button class="btn">Post</button>
                        </form>
                    </div>
                </div>
            </div>`;

const displayComments = (comments) => {
  const list = document.querySelector('.comments');
  if (!comments.length) {
    list.innerHTML = '<p>No comments found</p>';
  } else {
    comments.forEach((item) => {
      list.innerHTML += `<li><span>${item.creation_date}</span> | <span>${item.username}:</span> ${item.comment}</li>`;
    });
  }
};

export const countComments = (comments) => {
  if (comments.length) {
    document.getElementById('count').innerHTML = `Comments ( <span class="fig">${comments.length}</span> )`;
  }
};

export const updateCount = () => {
  if (document.getElementById('count').innerHTML === ' Comments  ') {
    document.getElementById('count').innerHTML = 'Comments ( <span class="fig">1</span> )';
  } else {
    let test = Number(document.querySelector('.fig').innerHTML);
    test += 1;
    document.querySelector('.fig').innerHTML = `${test}`;
  }
};

export const getComments = async (movieID) => {
  const response = await fetch(`${baseURL}apps/${appId}/comments?item_id=${movieID}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const comments = await response.json();
  displayComments(comments);
  countComments(comments);
};

export const addComment = async (comment) => {
  fetch(`${baseURL}apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};