## notes for this project

--[O]: init project structure
--[O]: connect mongodb

## working on

--[]: home page

### Connecting The Backend

""
in this part i in with the help axios

    add axios package to your react-project client" npm install axios --save"
    we make changes on the web ui that goes to redux store with thunk dispatch with axios gos to our back end

""

--[0]: get axios

### backend JWT auth

""

1. first create your user modal
2. make a auth route file to handle all auth and test route
3. install bcryptjs
4. write the validations
5. get on jwt token
6. install jsonwebtoken to handle jwt and add jwtSecret in you key file
7. make a isauthenticated middleware to protect your private routes
8. jwt is stateless so when you need to access a private route that you already login you have to first grab the user

done::
when you finish making your jwt auth token systems
there is public routes:: routes anybody can access dont need to login
there is private routes:: routes that are private

""

--[0]: create user model
--[0]: create route to registor user and test route with postman
--[0]: install bcryptjs for encryption

### redux error and auth registration and login

""
in this section we going to setup our auth reducer, error reducer. and auth action, error action to handle our react compoenent registration and login page

""
--[]: make error reducer, auth reducer and import them inside the index root reducer
--[]: make auth action and error action
