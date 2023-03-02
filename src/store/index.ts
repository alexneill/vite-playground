import { createStore, createTypedHooks } from 'easy-peasy'
import todos, { TodosModel } from './models/todo'

interface StoreModel {
  todos: TodosModel
}

const storeModel: StoreModel = {
  todos,
}

const store = createStore(storeModel, {
  name: 'vite-playground-store',
})

export const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>()

export default store
