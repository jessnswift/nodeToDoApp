var app = new Vue({
  el: "#app",
  data: {
    message: "Welcome to Tasks!"
  }
});

var theList = new Vue({
  el: "#the-list",
  data: {
    todos: []
  },
  methods: {
    theTasks: function() {
      console.log(this.todos);
    },
    fetchTask: function() {
      fetch(`http://localhost:3000/api/tasks`)
        .then(r => r.json())
        .then(r => {
            this.todos = r;
        })
    },
    createNewTask: function() {
      fetch(`http://localhost:3000/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(r => r.json());
    }
  },
  mounted() {
    this.fetchTask();
  }
});
