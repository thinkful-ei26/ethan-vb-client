# Welcome to VacationBrain! 

### Here's how it works:

Add a trip

Give your trip a name and tell us what you're looking for in a vacation and how long you're travelling for.

Other VacationBrain users will suggest a destination for you!

Add a suggestion

Have great vacation ideas of your own? Submit a suggestion for other users' requested trips.

The live VacationBrain client app can be found deployed on Heroku at https://ethan-vb-client.herokuapp.com/.
You can create an account or use the demo account (username: demo, password: password)

The backend of the app is deployed on Heroku at https://ethan-vb-server.herokuapp.com/ and the server repo can be found at https://github.com/thinkful-ei26/ethan-vb-server.

The app is built on the MERN stack. 
The client side uses React with Redux for state managemeent and Redux Form for form management. 
The server side uses Node with Express and Mongoose to communicate with a MongoDB database hosted on mLab at https://mlab.com/databases/ethan-vb-db

Client codebase structure: 

Src
   
   Components
      
      App.js
      
      All-trips-list.js
      
      Info-modal.js
      
      New-trip-input.js
      
      New-trip.js
      
      Trip-suggestion.js
   
   Actions
      
      Trips.js
   
   Reducers
      
      Trips.js
      
      Index.js
   
   Tests
   
   Validators.js
   
   Index.js
   
   Store.js
   
   Config.js
   
   
Server codebase structure
   
   Models
   
      Trip.js
   
   Routes
      
      Trips.js
   Data
      
      Trip-data.js
   
   Test
   
   Utils
   
   Index.js
   
   DB-Mongoose.js
   
   Config.js
   
   
   

Relevant Images:
User Instructions:

![User Instructions](../master/readme-images/vb-v1-info-modal.PNG)
      
New Trip Form:

![New Trip](../master/readme-images/vb-v1-add-trip.PNG)
      
Trip List:

![Trip List](../master/readme-images/vb-v1-trip-list.PNG)
      
Add Suggestion:

![Add Suggestion](../master/readme-images/vb-v1-add-suggestion.PNG)
