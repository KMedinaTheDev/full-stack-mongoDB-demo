# My First Full Stack App using mongoDB
*In Progress*
In this project I practice Creating an Express Server.This app allows me to save and read from MongoDB, using the template engine Embedded JS.
![Screenshot]("https://github.com/KMedinaTheDev/full-stack-mongoDB-demo/blob/master/mongoDBdemo.png")

**Link to project:** Coming Soon
https://github.com/KMedinaTheDev/full-stack-mongoDB-demo/blob/master/mongoDBdemo.png
## How It's Made:

**Tech used:** HTML, MongoDB, JavaScript, & Embedded JavaScript
First I had to create a form with a method and an action attribute, to tell the browser where to navigate in the Express App we are using for this demo, as well as what request to send, in this case it is POST. The form contains two inputs for text with unique name values.
In order to handle reading the data from the form I add the body-parser package from npm and add it to my server.js file by requiring it.This package includes the urlencoded method which tells the body-parser to extract data from the <form> element and add it to the body property in the request object.
I then added mongoDB via the command line and created an mLab account in order to be able to retrieve the object being created after the page loads, via a data base. To connect to MongoDB I had to use the Mongo.Client's connect method.

I create a quotes collection with MongoDB's db.collection() method, simultaneously I also save the user's entry into MongoDB with the save method. At this point the the user is redirected to the pathway /, causing their browser to reload. To retrieve the quotes from mLab I use the find method available in the collection method, which returns a cursor, or a Mongo Object, this object contains all the quotes from the newly created database. The cursor object contains properties and methods making it easier to work with the data. I use the toArray method which takes in a callback function that allows me to do things with the quotes retrieved from mLab.
 In order to then display the quotes I using the template engine ejs , to render render the retrieved quotes and to add quotes to the HTML file, since dynamic content can not be added to an HTML file.

 With ejs JavaScript can be written within <% %> tags, I loop through the quotes array and create single strings.  

## Improvements to Be Made:

In the future I would add a stylesheet to this app, since it was a demo run of my newly learned mongoDB skills I have left it as is.

## Lessons Learned:

I learned to execute CREATE and READ operations, save, and read from MongoDB.
*Make sure you place body-parser before your CRUD handlers!*
As well as how to use a template engine like Embedded JS to render HTML values entered in the form field.


**GitHub:** Coming Soon
