Memory cards game: match each pair of cards in as few guesses as possible

Approach:

1. importing images:
The file 01-index.js was created so that I could import all the images I want to access
with a single import. The function "photoIndex" was created with the file path for each
image being returned as a function and called (photoIndex.image1, etc) when needed.

2. Cards.js component:
The card component has 3 props. bgImg, matchClass, handleClick
bgImg needs to be run as function ( bgImg() ) since the src element cannont run a function and must execute before being used as a value in the img element
handleClick function is mananged in App.js

3. Playing game:
Upon selecting 2 cards, the html elements are compared to see if they are the same element, if they are the same, then they are a match and the buttons are disabled.
If they're not a match, a third click on the board will flip the card back over, then you can select another pair. All of this logic is stored in the handleclick function.

4. Finising game:
Once all pairs are matched a modal pops up telling you your score, the score state variables are updated at the top of the screen and gives you the option to try again or reset.
Either button will shuffle the cards and enable all the buttons again for the next round.
This logic is handled in the function handleButtons.