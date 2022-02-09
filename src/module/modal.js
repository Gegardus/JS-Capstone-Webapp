import { appId, baseURL } from './interact'

export const modal = (movie) => `<div class="popup-container">
                <div class="popup">
                    <button class="btn close">&times;</button>
                    <div class="details">
                        <div>
                            <img class="img" src="${movie.image.medium}" height="450" width="370"/>
                        </div>
                        <div class="summary">
                            <ul class="info">
                                <li><h1> ${movie.name} </h1></li>
                                <li> Language: ${movie.language}</li>
                                <li> Type: ${movie.type}</li>
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
export const getComments = async (movieID) => {
    const response = await fetch(`${baseURL}apps/${appId}/comments?item_id=${movieID}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const comments = await response.json();
    displayComments(comments);
};
