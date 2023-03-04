// This is task(role) based structure : meas all tasks(similar exist only in one filr)

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
    /controller