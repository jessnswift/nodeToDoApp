
var theList = new Vue({
  el: "#the-list",
  data: {
    tasks: [],
    isEditing: false,
    newTaskText: ''
  },
  methods: {
    toggleIsEditing: function (task) {
        if (task.isEditing) {
            Vue.set(task, 'isEditing', false)
        } else {
            Vue.set(task, 'isEditing', true)
        }
    },
    theTasks: function() {
    },
    fetchTasks: function() {
      fetch(`http://localhost:3000/api/tasks`)
        .then(r => r.json())
        .then(r => {
          console.log(r)
          this.tasks = r;
        });
    },
    deleteTask: function(id) {
      fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      }).then(() => {
          this.fetchTasks();
      });
    },
    editTask: function(task) {
      fetch(`http://localhost:3000/api/tasks`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
      }).then(() => {
          this.fetchTasks();
      });
    },
    createNewTask: function() {
      fetch(`http://localhost:3000/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: this.newTaskText, completed: false})
      }).then(() => {
        this.newTaskText = '';
        this.fetchTasks();
      });
    }
  },
  mounted() {
    this.fetchTasks();
  }
});
