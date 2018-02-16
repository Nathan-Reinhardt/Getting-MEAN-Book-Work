# Nathan Reinhardt Getting MEAN Project
## Chapter 4
Link - https://mysterious-stream-60696.herokuapp.com/
![Screenshot](Chapter4GettingMean.png)

In Chapter 4, the website is now starting to have proper formatting. After finishing
Chapter 4, I have built a better understanding on how a website can be formatted
and getting really familiar with .jade files. The most challenging part was debugging
the .jade files. The debugging most of the time came down to indentation errors. 
In the book on page 99, there is a small error. It shows location-info.js instead of
the correct location-info.jade (listing 4.7). The error can crash the page since it
is the wrong file type. This chapter also went in depth in the controllers and views folders.
Created multiple views for new pages to navigate to.

1. This layout allows to have mixin code that gets called. A mixin is a function that can
   be called through out the code.
2. The location page routes to location-info.jade in the views folder. This file calls the
   outputRating function which is stored in includes, which is created as a mixin.
3. Express provides the routing functionality. This is front end functionality.

## Chapter 3
Link - https://mysterious-stream-60696.herokuapp.com/
![Screenshot](Chapter3GettingMean.png)

In Chapter 3 we have a very basic setup for a webpage.  Most of this chapter taught
the basics of using these new tools given at our disposal. Challenges that I had was
making sure app_server was being set correctly cause I remember seting it correctly 
at first, but for some reason it didnt save those changes so my bootstrap was not giving
off the proper theme. Seting everything up on a new device is probably the most
challenging concept to do well.

1. This process is called routing. The code that connects a URL request to the controller code
   is called route.
2. When you want to add an external module you use the command npm install.
3. It appears in the console screen.
