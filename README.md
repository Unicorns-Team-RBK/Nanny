# Nanny Making every moment count ...
Welcome to Nanny a child care network inspired by the philosophy that the early years of life are the most developmentally important for intellectual, social, and emotional health.

Together, we’re an inspired collective of child care experts, nannies and parents. We've spent the past week in the green field project navigating the very unique experience of raising children in TUNISIA ! It's our belief that not much “sitting” actually happens when you’re in the hands of a great nanny, and that educational moments, engaging play, and thoughtful conversation at every age are an integral part of raising the next generation of amazing human beings.

NOTE : you need to run "npm i" in every folder. Then you need to run "db:setup" !!!!!!!! in the backend folder !!!!!!!!  to transfer the data of the nannies profiles to the database .
NANNY FOLDER : 
- backend : "npm start"
*index.js : to setup express and mongoose.
*Models: contains the schemas of parents, the schema of nannies and the data of nannies to send to the database.
*routes: *parentRouter : functions to register, to login the parent. functions to dispaly and search and filter the nannies data.
*nannyRouter : we haven't use it because the nanny can not sign in directly, she should pass by the agency to be confirmed as a nanny, so you can add a register for the nannies that can be used only by the admin then the nanny can login.
*Middleware: to verify the parent is logged in or not (authorization)



- frontend : "npm start" (to verify code use "npm run build");
*** it's a react application (npx create react application) : don't delete the public folder and the setupTests.js 
// index.js : render all the components that are located in App.js 
// App.js : using React Hooks ,,BrowserRouter, Switch, Route, useState and useEffect 
******* components 
     // HomePage.jsx 
     // login.jsx
     // Header.jsx
      
+ ForNannies : everything that related to the nannies fornannies.jsx / registernannies.jsx / displaynannies.jsx / searchnannies.jsx / nannyprofile.jsx

+ ForParents : everything related to the parent forparent.jsx / registerparent.jsx

++++++ css files : all the components have a css file.
-------------------------------------------------------------------------------------------
**backend :
    axios
    bcryptjs
    cors
    dotenv
    express
    jquery
    jsonwebtoken
    mongoose

**frontend :
    react
    react-dom
    react-router-dom
    react-scripts



