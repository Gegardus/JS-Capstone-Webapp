/**
 * @jest-environment jsdom
 */

import { countComments } from './modal';

describe('this should show the test for the lenghts of comments', () => {
    test('test if the are not comments to found', () => {
        document.body.innerHTML += '<h2 id="count"> Comments  </h2>';
        const counter = document.body.querySelector('#count');
        countComments([]);
        expect(counter.innerHTML).toBe(" Comments  ");
    });
    test('it will test the comments counter', () => {
        const comments = [{ movieName: 'item1', id: 1, }, { movieName: 'item2', id: 2 }];
        document.body.innerHTML += '<h2 id="count"> Comments  </h2>';
        const counter = document.body.querySelector('#count');
        countComments(comments);
        expect(counter.innerHTML).toBe(`Comments ( <span class="fig">${comments.length}</span> )`);
    });
})