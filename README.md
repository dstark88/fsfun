### Beer Coding Challenge

## Live Page
https://fsfun-das.herokuapp.com/beer

## GitHub Link
https://github.com/dstark88/fsfun

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

run:
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical Details
This app contains GET, POST, and PUT routes.

The GET route gets all beers for one object in the JSON API data.
The POST route adds a new JSON object to the beer API.
The PUT route updates likes and dislikes on the individual JSON object.

The LoadBeers() function brings in the entire list (GET) and renders the results on the screen.

HandleSearchSubmit() calls the GET route and goes through a loop to find the name of the beer and
attach it to an ID.  Once it has the ID, it renders the field with that beer and its likes.

HandleFormSubmit() calls the API with a POST of the name of the beer with a starting number of likes = 1 and renders it to the top of the list.

HandleLikeSubmit() and HandleDislikeSubmit() calls the GET route and goes through a loop to find the name of the beer you would like to update likes for.  If "like" is clicked, it calls the PUT route to update the list with 1 like.  If "dislike" is clicked, it does the opposite.

## Future Development
1.  Have the search fields clear after a submit.
2.  Add a "like" and "dislike" buttom to each line item.
3.  Sort beers by number of likes.
4.  Produce beer card with a picture of each beer when searched.
5.  Create a beer watcher to discard any crappy beers.