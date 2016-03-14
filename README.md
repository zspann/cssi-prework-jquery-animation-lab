
# Lab - When Pigs Fly
There are some basic jQuery events in script.js, and a cute image of a pig in pig.html. Open this repo on Github and clone these files onto your local machine.

## Step 1: Animate the Pigs When You Click the Fly Button
Add a third button called "Fly" that makes the pig "fly" by moving right and exiting the screen.
* Check out the .animate() documentation to get this to happen.
* In CSS, change the `img` elements to be styled with a position other than the static - which is the default. Otherwise the pigs won't be able to move.


## Step 2: Jump on Mouse Click
Use what you learned about jQuery events to have the pig hop up and down 3 times when it is clicked. You will need both a loop and to use relative values (+=10px, -=10px)

## Step 3: Add a New Pig
Modify the HTML to add a new pig *to the right* of your current pig.

## Step 4: Follow the Leader
Create an event that is triggered by double clicking the 1st pig, who then flies away. Once the first pig flies away, the other one follows automatically. Use a callback function so that the 2nd pig is animated only after the first animation is complete.

# Reference
[W3 Schools jQuery Animation](http://www.w3schools.com/jquery/jquery_animate.asp)
