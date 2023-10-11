# Todo-app API
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Description

This is a Todo-app API built using Nodejs, Expressjs, and MongoDB. It has endpoints for creation, getting, updating and deleting a todo from the MongoDB database but requires authentication. It uses JWT Tokens for authentication. It requires authentication to be able to perform any function because authorization is needed to perform actions on the todo items.

Users can only have access to the todos they create.

The available features are:
- [x] User Login/Signup
- [x] Create a Todo
- [x] Get all Todos
- [x] Get a single Todo
- [x] Update a Todo
- [x] Delete a Todo

Each Todo has a 
- **title**: This is what the todo is for. This is a required field.
- **completed**: This field describes if the todo has been completed or not. It is not required but has a default value of `false`.
- **userId**: The ID of the user that created the Todo.
- **createdAt** and **updatedAt**: The time the todo was created and the time it was last updated, respectively.
- **_id**: MongoDB generated ID for the todo.

Looking into adding some other features like **Reminder**, **Categories**, Todo **expiry time and date**

This API is built for an educational purpose but can be used by anyone.

## BASE URL

**`https://api-todo-9rux.onrender.com/api/v1`**


## USAGE
### Fetching API
#### USERS: Authorization Token

This is required before any request can be made. This API uses JSONWebToken. You can learn more about **[JSONWebToken here](https://jwt.io/introduction)**.
- `async/await` used. Other methods can be used.

1. `[POST] api/v1/users/register` - add user.
   - Method: `POST`
   - Body contains: in `JSON` format.
     - email
     - password

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"

    const bodyData = {
          email: "dummyemail@example.com",
          password: "password1234SDWS%$#"
    }
    const bodyJSON = JSON.stringify(bodyData)

    const fetchData = async () => {
      const res = await fetch(`${ baseURL }/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyJSON
      })

      const jsonData = await res.json()

      return jsonData
    }
```

Data Response: 

In **JSON**:

```json
{
  "status": 0,
  "email": "dummyemail@example.com",
  "token": "some token string"
}
```

As a **JavaScript Object**:

```javascript
{
  status: 0,
  email: "dummyemail@example.com",
  token: "some token string"
}
```

2. `[POST] api/v1/users/login` - login user.
    - Method: `POST`
    - Body contains: in `JSON` format.
     - email
     - password

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"

    const bodyData = {
          email: "dummyemail@example.com",
          password: "password1234SDWS%$#"
    }
    const bodyJSON = JSON.stringify(bodyData)

    const fetchData = async () => {
      const res = await fetch(`${ baseURL }/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyJSON
      })

      const jsonData = await res.json()

      return jsonData
    }
```

Data Response: 

In **JSON**:

```json
{
  "status": 0,
  "email": "dummyemail@example.com",
  "token": "some token string"
}
```

As a **JavaScript Object**:

```javascript
{
  status: 0,
  email: "dummyemail@example.com",
  token: "some token string"
}
```

#### TODOS
Having logged in/registered successfully :+1:, the token from the user can then be passed to the server through the headers to acces the **TODO Routes**.

#### Create Todo
`[POST] /api/v1/todos`
- Method: `POST`
- Data: in `JSON` Format
  - title: String (required)
  - completed: Boolean (not required but defaults to `false`)

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"
    const token = "some token string" // gotten from user authentication
    const todoData = {
      title: "The TODO of a new User"
    }
    const todoJSON = JSON.stringify(todoData)

    const setTodo = async () => {
      const res = await fetch(`${ baseURL }/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ token }`
        },
        body: todoJSON
      })

      const jsonData = await res.json()

      console.log(jsonData)
    }
```

Data Response:

In **JSON**

```json
{
  "status": 0,
  "todo": {
    "title": "The TODO of a new User",
    "completed": false,
    "userId": "65264a4341764a1f7a5dab6f",
    "_id": "65265062caceeb7084e45aa9",
    "createdAt": "2023-10-11T07:36:02.786Z",
    "updatedAt": "2023-10-11T07:36:02.786Z",
    "__v": 0
  }
}

```

As a **JavaScript Object**

```javascript
{
  status: 0,
  todo: {
    title: "The TODO of a new User",
    completed: false,
    userId: "65264a4341764a1f7a5dab6f",
    _id: "65265062caceeb7084e45aa9",
    createdAt: "2023-10-11T07:36:02.786Z",
    updatedAt: "2023-10-11T07:36:02.786Z",
    __v: 0
  }
}
```

#### Get All Todos
`[GET] /api/v1/todos`
- Method: `GET`

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"
    const token = "some token string" // gotten from user authentication

    const setTodo = async () => {
      const res = await fetch(`${ baseURL }/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ token }`
        },
      })

      const jsonData = await res.json()

      console.log(jsonData)
    }
```

Data Response:

In **JSON**

```json
{
  "status": 0,
  "todos": [
    {
      "_id": "65265062caceeb7084e45aa9",
      "title": "The TODO of a new User",
      "completed": false,
      "userId": "65264a4341764a1f7a5dab6f",
      "createdAt": "2023-10-11T07:36:02.786Z",
      "updatedAt": "2023-10-11T07:36:02.786Z",
      "__v": 0
    },
      "...otherTodos"
  ]
}

```

As a **JavaScript Object**

```javascript
{
  status: 0,
  todos: [
    {
      _id: "65265062caceeb7084e45aa9",
      title: "The TODO of a new User",
      completed: false,
      userId: "65264a4341764a1f7a5dab6f",
      createdAt: "2023-10-11T07:36:02.786Z",
      updatedAt: "2023-10-11T07:36:02.786Z",
      __v: 0
    },
      ...otherTodos
  ]
}
```

> :memo: **`NOTE`**<br>
Todos fetched are the ones created by the user whose credentials is registered on the token.

#### Get Single Todo
`[GET] /api/v1/todos`
- Method: `GET`

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"
    const token = "some token string" // gotten from user authentication
    const id = "id of todo to fetch

    const setTodo = async () => {
      const res = await fetch(`${ baseURL }/todos/${ id }`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ token }`
        },
      })

      const jsonData = await res.json()

      console.log(jsonData)
    }
```

Data Response:

In **JSON**

```json
{
  "status": 0,
  "todo": {
            "_id": "TODO ID",
            "title": "TODO Title",
            "completed": false,
            "userId": "65264a4341764a1f7a5dab6f",
            "createdAt": "2023-10-11T07:36:02.786Z",
            "updatedAt": "2023-10-11T07:36:02.786Z",
            "__v": 0
          }
}

```

As a **JavaScript Object**

```javascript
{
  status: 0,
  todos: {
          _id: "TODO ID",
          title: "TODO Title",
          completed: false,
          userId: "65264a4341764a1f7a5dab6f",
          createdAt: "2023-10-11T07:36:02.786Z",
          updatedAt: "2023-10-11T07:36:02.786Z",
          __v: 0
        }
}
```

#### Delete Todo
`[DELETE] /api/v1/todos`
- Method: `DELETE`

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"
    const token = "some token string" // gotten from user authentication
    const id = "id of todo to fetch

    const setTodo = async () => {
      const res = await fetch(`${ baseURL }/todos/${ id }`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ token }`
        },
      })

      const jsonData = await res.json()

      console.log(jsonData)
    }
```

Data Response:

In **JSON**

```json
{
  "status": 0,
  "todo": {
            "_id": "TODO ID",
            "title": "TODO Title",
            "completed": false,
            "userId": "65264a4341764a1f7a5dab6f",
            "createdAt": "2023-10-11T07:36:02.786Z",
            "updatedAt": "2023-10-11T07:36:02.786Z",
            "__v": 0
          },
   "message": "Todo with the id 'TODO ID' is successfully deleted."
}

```

As a **JavaScript Object**

```javascript
{
  status: 0,
  todos: {
          _id: "TODO ID",
          title: "TODO Title",
          completed: false,
          userId: "65264a4341764a1f7a5dab6f",
          createdAt: "2023-10-11T07:36:02.786Z",
          updatedAt: "2023-10-11T07:36:02.786Z",
          __v: 0
        },
   message: "Todo with the id 'TODO ID' is successfully deleted."
}
```

#### Update Todo
`[PATCH] /api/v1/todos`
- Method:`PATCH`
- Body: in `JSON` Format
  - update to be made

Code Snippet:

```javascript
    const baseURL = "https://api-todo-9rux.onrender.com/api/v1"
    const token = "some token string" // gotten from user authentication
    const id = "id of todo to fetch

    const bodyData = {
      completed: true
    }
    const bodyJSON = JSON.stringify(bodyData)

    const setTodo = async () => {
      const res = await fetch(`${ baseURL }/todos/${ id }`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ token }`
        },
        body: bodyJSON
      })

      const jsonData = await res.json()

      console.log(jsonData)
    }
```

Data Response:

In **JSON**

```json
{
  "status": 0,
  "todo": {
            "_id": "TODO ID",
            "title": "TODO Title",
            "completed": true,
            "userId": "65264a4341764a1f7a5dab6f",
            "createdAt": "2023-10-11T07:36:02.786Z",
            "updatedAt": "2023-10-11T07:36:02.786Z",
            "__v": 0
          },
   "message": "Todo successfully updated."
}

```

As a **JavaScript Object**

```javascript
{
  status: 0,
  todos: {
          _id: "TODO ID",
          title: "TODO Title",
          completed: true,
          userId: "65264a4341764a1f7a5dab6f",
          createdAt: "2023-10-11T07:36:02.786Z",
          updatedAt: "2023-10-11T07:36:02.786Z",
          __v: 0
        },
   message: "Todo successfully updated."
}
```

### Cloning API Project Files
Cloning and running the API in the Local Computer can be done by running:

Using SSH

```bash
> git clone git@github.com:PaulAjii/Todo-app.git
```

Using HTTPS
```bash
> git clone https://github.com/PaulAjii/Todo-app.git
```

### Running the App Locally
After successfully cloning :+1:, install the dependencies and run:

```bash
# change directory into the cloned app: Todo-app
> cd Todo-app

# install dependencies
> npm install

# start app
> npm run dev
```

### Running the app
First create a `.env` file in the root directory of the project.
   - This is where the DataBase URI will be placed and accessed in the app using `process.env`

In the root directory, run:

```sh
# create a .env file
> touch .env
```

In the `.env` file fill in the following:

```.env
DB_URI="some mongodb database URI string"
JWT_SECRET="some random long string"
PORT="PORT on which the app should run, else it will default to port 3000"
```

Having installled all dependencies, and created a `.env` file, start the app:

```bash
# to start nodemon
> npm run dev

# using node
> npm start
```

Terminal Snippet:

```bash
# run local server using nodemon
> npm run dev
```

Response in Terminal: *if all is well*

```bash
> api@1.0.0 dev
> nodemon index.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Successfully connected to the database...
Server running successfully on port 3000...
```

With the above, all things work well :+1:, server works well.
Keep Hacking. :robot::robot::robot::man_technologist::man_technologist::man_technologist::man_technologist:

### Technologies used
   - [NodeJS](https://www.nodejs.org)
   - [Expressjs](https://www.expressjs.com)
   - [MongoDB](https://www.mongodb.com)
   - [Mongoose](https://www.mongoosejs.com)
   - [Dotenv](https://www.npmjs.com/package/dotenv)
   - [Nodemon](https://www.npmjs.com/package/nodemon)
   - [Bcrypt](https://www.npmjs.com/package/bcrypt)
   - [CORS](https://www.npmjs.com/package/cors)
   - [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
   - [Validator](https://www.npmjs.com/package/validator)

Editor used: [Visual Studio Code: VS Code](https://code.visualstudio.com/)
