import { useTodoActions } from "../hooks/useTodoActions"
import { TodoTitle } from "../types"

export const AddNewTodo = () => {
  const { addTodo } = useTodoActions()

  function handleSubmitTodo (
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('todo') as TodoTitle

    addTodo(title)
    form.reset()
  }

  return (
    <form
      onSubmit={handleSubmitTodo}
      className='w-[350px] flex flex-col gap-4 p-4 border border-black rounded-lg'
      aria-label='Agregar nueva tarea a la lista'
    >
      <div>
        <label htmlFor='todo'>Introducir tarea:</label>

        <input
          className='w-full bg-gray-500 text-white outline-none rounded-md px-3 py-2'
          id='todo'
          name='todo'
          type='text'
          required
          placeholder='Ejemplo: Comprar fruta'
        />
      </div>

      <button
        type='submit'
        className='bg-blue-900 text-white rounded-lg py-2 px-4 font-semibold hover:bg-blue-500 transition-colors'
      >
        Anadir
      </button>
    </form>
  )
}
