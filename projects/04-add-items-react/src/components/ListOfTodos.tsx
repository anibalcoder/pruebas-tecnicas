import { Todos, TodoId } from "../types"

interface Props {
  todos: Todos
  HandleDeleteTodo: (id: TodoId) => void
}

export const ListOfTodos: React.FC<Props> = ({ todos, HandleDeleteTodo }) => {
  return (
    <section className='w-full'>
      <h2 className='text-2xl text-black/80 font-semibold mb-3'>
        Lista de tareas
      </h2>

      {
        todos.length === 0 ? (
          <p className='font-bold text-red-800'>No se han agregado tareas</p>
        ) : (
          <ul className='flex flex-col gap-3'>
            {
              todos.map(({ id, title }) => (
                <li
                  key={id}
                  onClick={() => HandleDeleteTodo(id)}
                  className='bg-[#14334d] text-white p-3 rounded-md cursor-pointer hover:bg-red-500'
                  title='Eliminar'
                >
                  {title}
                </li>
              ))
            }
          </ul>
        )
      }
    </section>
  )
}
