# BookStore

This project was generated with:  
[Angular CLI](https://github.com/angular/angular-cli) version 10.1.4  
NPM version 6  
Node 10

Please install above tools in order to launch the app in local machine.

## Development setup

Run `npm install` to install all node dependencies.  

Front-end server: Run `npm start` for launching webpack dev server.  
Backend server: In another terminal instance, navigate to /server folder and Run `node server.js` for launching node server. This will be used to serve API  
Launch the app in Chrome by navigating to `http://localhost:4200/`. 

## Production like setup

Run `npm install` to install all node dependencies.  

Run `npm run-script build` to build the project. The build artifacts will be stored in the `server/book-store` directory.  

Server: Navigate to /server folder and run `node server.js`.  
Launch the app in Chrome by navigating to `http://localhost:3000`. 

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## About the app

This is a single page application with two routes: /home (default) & /checkout  
On load, list of books is fetched from backend server (stored in node server)  
Users can add to cart if a book is available. Books can also be removed from cart  
Users can checkout a non-empty cart to view the shopping basket in the checkout page  
User session is maintained unless either of these happens: `Refressh Session` is clicked OR Browser tab is closed.
