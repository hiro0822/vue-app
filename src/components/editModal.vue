<template>
  <div class="editTodo">
    <div id="inline">
      <div>
        <form v-on:submit.prevent="editTodo">
          <div class="name-form form-group">
            <label class="control-label">Name</label>
            <input class="name-input form-control" type="text" v-model="todo.name"/>
          </div>
          <div class="descript-form form-group">
            <label class="control-label">Description</label>
            <textarea class="descript-input form-control" type="text" v-model="todo.description" rows="4"/>
          </div>
          <button class="submit btn btn-primary" type="submit" name="button" @click="closeModal" :disabled="!disabled">Submit</button>
        </form>
        <button class="close btn btn-defult" @click="closeModal"><img class=" img-responsive center-block" src="../assets/close-button.png" alt="close"/></button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import v8n from 'v8n';

export default {
  name: "editModal",
  props: [
    "Todo"
  ],
  data(){
    return {
      todo: {
        id: this.Todo.id,
        name: this.Todo.name,
        description: this.Todo.description,
        isComplete: this.Todo.isComplete
      }
    }
  },
  computed: {
    disabled() {
      return this.validate(this.todo.name)
    }
  },
  methods: {
    editTodo() {
      this.$store.dispatch("todos/editTodo", this.todo);
      this.$modal.hide("editTodo")
    },
    closeModal() {
      this.$emit("close")
    },
    validate(words) {
      return v8n()
        .not.null()
        .not.empty()
        .not.first(" ")
        .not.first("　")
        .test(words)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editTodo{
  top: 20px;
  position: relative;
}

.submit {
  position: relative;
  bottom: 8px;
  left: 252px;
  padding: 5px 10px;
}

.close {
  position: relative;
  bottom: 294px;
  right: 13px;
}

.name-form  {
  position: relative;
  left: 5px;
}
.descript-form {
  position: relative;
  left: 5px;
}

.name-input {
  width: 50%;
}

.descript-input {
  width: 98%;
}
</style>
