var app = new Vue({
  el: "#app",
  data: {
    message: "Welcome to Tasks!"
  }
});

var theList = new Vue({
  el: "#the-list",
  data: {
    todos: [],
    isEditing: false
  },
  methods: {
    toggleIsEditing: function (todo) {
        if (todo.isEditing) {
            Vue.set(todo, 'isEditing', false)
        } else {
            Vue.set(todo, 'isEditing', true)
        }
    },
    theTasks: function() {
      console.log(this.todos);
    },
    fetchTask: function() {
      fetch(`http://localhost:3000/api/tasks`)
        .then(r => r.json())
        .then(r => {
            console.log(r)
          this.todos = r;
        });
    },
    deleteTask: function(id) {
      fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      }).then(() => {
          this.fetchTask();
      });
    },
    editTask: function(task) {
      fetch(`http://localhost:3000/api/tasks`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: task,
        })
      }).then(() => {
          this.fetchTask();
      });
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
