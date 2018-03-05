# My First Full Stack App using mongoDB
In this project I practice Creating an Express Server.This app allows me to save and read from MongoDB, using the template engine Embedded JS.
![alt tag]("/mongoDBdemo.png")

**Link to project:** Coming Soon

## How It's Made:

**Tech used:** HTML, mongoDB, Embedded JavaScript
First I had to create a form with a method and an action attribute, to tell the browser where to navigate in the Express App we are using for this demo, as well as what request to send, in this case it is POST. The form contains two inputs for text with unique name values.
In order to handle reading the data from the form I add the body-parser package from npm and add it to me server.js by requring it.This package includes the urlencoded method which tells the body-parser to extract data from the <form> element and add it to the body property in the request object.
I then added mongoDB via the command line and created an mLab account in order to be able to retrieve the object being created after the page loads, via a data base. To connect to MongoDB I had to use the Mongo.Client's connect method. 


## Improvements to Be Made:

In the future I would add a stylesheet to this app, since it was a demo run of my newly learned mongoDB skills I have left it as is, but there is plenty of room for improvement.

## Lessons Learned:

I learned to execute CREATE and READ operations, save, and read from MongoDB.
*Make sure you place body-parser before your CRUD handlers!*
As well as how to use a template engine like Embedded JS to render HTML values entered in the form field.
With mLab & mongoDB multiple users and passwords can be created so multiple users can access the app. 

**GitHub:** Coming Soon
