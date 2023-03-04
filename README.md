# Welcome to Flights Service
## Project Setup
  - clone the project on your local
  - Execute `npm install` on the same pasth as of your root directory of the downloaded project
  - Create a `.env` file in the root directory and add the following environment variable
    -`PORT=3000`
  - Inside the `src/config` floder creates a new file `config.json` and  then add the following piece of json

  ```
  {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` 
```


















<!-- // This is task(role) based structure : meas all tasks(similar exist only in one filr)

// tests are imp. as before deployment all test should passed by your code,
we don't upload tests on the server bcz create extrea loadtime etc. on server

// to remove or avoid test loadtime on server we have src folder

/
-src/ mns actual things deoply on server u want to run
  -  index.js/ // server
  -  models/
  -  controllers/
  -  middlewares/
  -  services/
  -  utils/
  -  config/
  - repository
  you won't run test again again so it's not mandatory to upload on server
- tests/ [later]  



e.g. of feature based
/
-flights
    /models
    /controllers
-search
    /models
    /controller -->


    <!-- Changing Readme to make it real one if someone wants to clone our project then how he should do -->
