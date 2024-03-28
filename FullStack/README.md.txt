

# h1

##Instructions for Use:
 
 - In the top bar, you can choose whether you want to manage the existing database or choose to create a new one and add a POS member.

![1](./RMDImages/1.png)

 - On this page you can update information about a new person, if you arrived via the "Create new" button
Or update details about a person who already exists in the system, if you arrived through an existing user.

![1](./RMDImages/1.png)

 - On this page you can view the existing members. 
 
![1](./RMDImages/1.png)

The buttons on the right will allow you to:
Clear
Edit information items
Add vaccination, date of positive finding for corona and date of recovery (negative finding)
View detailed information
 


##Dependencies
This project utilizes a variety of dependencies for both client-side and server-side functionality.

###Client-Side Dependencies
@tailwindcss/forms@^0.5.7: Provides pre-built CSS classes for common form elements.
@testing-library/jest-dom@^5.17.0: A set of utilities for testing React components with Jest DOM.
@testing-library/react@^13.4.0: A collection of testing utilities for React components.
@testing-library/user-event@^13.5.0: Tools for simulating user interactions like clicks, typing, and hovering in testing.
react@^18.2.0: The core React library for building user interfaces.
react-datepicker@^6.6.0: A component library for creating beautiful and accessible date pickers.
react-dom@^18.2.0: The DOM renderer for React applications.
react-hook-form@^7.51.2: A performant and flexible library for handling form state management in React.
react-scripts@5.0.1: Build scripts and configuration for creating production-ready React applications (included in create-react-app).
web-vitals@^2.1.4: A library for measuring core web vitals (performance metrics) in React applications.
Server-Side Dependencies
cors@^2.8.5: A middleware for handling Cross-Origin Resource Sharing (CORS) requests.
express@^4.19.1: A lightweight web framework for building Node.js applications.
express-async-handler@^1.2.0: Middleware to simplify asynchronous error handling in Express routes.
mongodb@^6.5.0: Official MongoDB driver for Node.js (if using MongoDB for your database).
mongoose@^8.2.3: An object-document mapper (ODM) for MongoDB that simplifies interactions with the database.

###Development Setup
Client-Side Setup (React)
Prerequisites: Ensure you have Node.js (version 16 or later) and npm (or yarn) installed on your system.
Clone the Repository: Use git clone https://github.com/your-username/your-repo.git to clone this project's repository locally.
Install Dependencies: Navigate to the project directory and run npm install (or yarn install) to install all the required dependencies.
Server-Side Setup (Node.js) 
Prerequisites: Same as client-side setup.
Install Dependencies: (Optional, if the server code is part of the same repository) Run npm install (or yarn install) again to install server-side dependencies.

###Start the Server
```sh
run
npm run dev
```

###Start the Client
```sh
run
npm start
```


##Easy discounts:

> This project is intended for manual use.
> I assume that unequivocal details, 
> about the person such as an identity number 
> and information about vaccinations that have 
> already been carried out should not be changed

> Also, it is not acceptable to delete medical information.