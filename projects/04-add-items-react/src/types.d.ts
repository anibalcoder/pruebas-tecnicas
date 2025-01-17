export type TodoId = `${string}-${string}-${string}-${string}-${string}`
export type TodoTitle = string

export interface Todo {
  id: TodoId
  title: TodoTitle
}

export type Todos = Todo[]