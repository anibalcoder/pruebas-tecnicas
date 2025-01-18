import { ListOfTodos } from './components/ListOfTodos'
import { AddNewTodo } from './components/AddNewTodo'
import { useSeo } from './hooks/useSeo'

function App () {
  useSeo({
    title: 'Prueba técnica de React',
    description: 'Añadi y eliminar tarea de la lista'
  })

  return (
    <main className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl font-bold'>
        TodoApp
      </h1>

      <AddNewTodo />
      <ListOfTodos />
    </main>
  )
}

export default App
