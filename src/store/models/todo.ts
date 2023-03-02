import { Action, action } from 'easy-peasy'
import { Todo } from 'types/todo'

export interface TodosModel {
  todos: Todo[]
  addTodo: Action<TodosModel, Todo>
}

const todos: TodosModel = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload)
  }),
}

export default todos
