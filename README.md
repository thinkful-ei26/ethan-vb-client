# [VacationBrain](https://vacationbrain.herokuapp.com/)

## Welcome to VacationBrain
Can't figure out where to go on your next trip? Check out VacationBrain. You can easily add a trip and get recommendations from the VacationBrain community. Have a great idea of your own? Recommend it to other users!


## App Screenshot
![Device Screenshots](https://github.com/thinkful-ei26/ethan-vb-client/blob/master/src/smartmockups_ju066xnd.png)

## Tech Specs: 
**Front-end:**
- React
- Redux
- Javascript
- HTML5

**Back-end**
- Node
- Express
- MongoDB hosted on mLab
- JWT 
- Passport 

## Links
[Server Repo](https://github.com/thinkful-ei26/ethan-vb-server)

[Deployed Server On Heroku](https://ethan-vb-server.herokuapp.com/)

[Deployed Client On Heroku](https://vacationbrain.herokuapp.com/)

## Schema
### User
```
{
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}
```

### Post
```
{ 
  name: String,
  selectedOptions: [{ type: String, required: true }],
  duration: { type: String, required: true },
  suggestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Suggestion'}],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}
```

### Suggestion
```
{
 suggestion: { type: String, required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}
```

## API Overview
```        
/api
.
├── /auth
│   └── POST
│       ├── /login
│       ├── /refresh
│       └── /refresh-profile
├── /users
│   └── POST /
├── /trips
│   └── GET 
│       ├── /trips
│       ├── /my-trips
│   └── POST /
├── /suggestions
│   └── POST /:id
```

