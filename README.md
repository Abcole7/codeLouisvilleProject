# codeLouisvilleProject

This is my submission for the Code Louisville front end web developer class. This project was quite an undertaking and I Definitely learned alot in the process. The theme of my project is a social media site aimed at pet owners simliar to twitter. Users of my site can make post about their pets and what they did that day or really anything they want to write about. When a user clicks the new post button at the top of the page it reveals a hidden form that they can fill out all the details of their post before hitting the submit button. Upon hitting the submit button the newpost method is called and the data from the form is processed into text and appended to list elements that are also created in javascript. All of this is appended to list item package that is sent back to the index page and appended to a running list of user post. Their is one flaw that I found out very deep into this project and spent many hours trying to research and find a solution. Because the way modern browsers work they do not allow you to access windows file systems directly due to security risk. What that mean't was the plan I had where the user could select an image from their PC to add to the post was not functionally possible or at least the way I was trying to do it. I would have needed to setup some sort of external API or database to make request too and get the images that way. I came to realization too late and was not able to implement it tht way I wanted too. With that said I do feel my proof of concept is their. The other pages are a nifty gallery view of images and a basic mock contact page.

CSS Features Implemented: 
-A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon
-Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. 

Javascript Features: 
Created a form that takes user input and manipulates using javascript to create new html elements and the dynamically display them on the page
Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page
Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code. 

Steps to run:
Once you clone the project locally from github you can use an IDE like VScode and start debugging from the index.html to run the project locally. Everything else should be able to interact from their and not special packagees are required.

Thanks
