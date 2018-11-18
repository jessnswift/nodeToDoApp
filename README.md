# Tasks
## Requirements
* Node 10.x and npm
* MySQL server running locally with a `todo` database. Configure MySQL credentials in `server/datasources.json`

## Install

```bash
$ npm install -g http-server
$ git clone https://github.com/jessnswift/nodeToDoApp.git
$ cd nodeToDoApp
$ npm install
$ npm run sass
```

# Run
In one terminal, run the api like so:

```
$ cd nodeToDoApp
$ node .
```

Then in a separate terminal window, serve the front-end code:

```
$ cd nodeToDoApp/client
$ http-server
```

Then open the browser at the address `http-server` is runing on e.g. `http://localhost:8080`

## Description:
Created an interface for managing a list of tasks.
```
- View Task
- Add Task
- Delete Task
- Edit Task
- Complete Task
```

## Technologies Used:
```
- Html
- Node.js
- Vue.js
- CSS
- LoopBack
- Sass
```
