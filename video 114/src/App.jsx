import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Task from './components/Task'
import { v4 as uuidv4 } from 'uuid';

function App() {
  let updateTodoList = []
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [finishedTask, setFinishedTask] = useState(false)


  const saveToLS = () => {
    localStorage.setItem("todoList", JSON.stringify(updateTodoList))
  }
  const handleAdd = () => {
    updateTodoList = [...todoList, { todo: todo, key: uuidv4(), isCompleted: false }]
    setTodoList(updateTodoList)
    setTodo("")
    saveToLS()
  }

  const handleEdit = (id) => {
    let t = todoList.filter((task) => {
      return task.key === id
    })
    setTodo(t[0].todo)
    handleDelete(id)
    saveToLS()
  }

  const handleDelete = (id) => {
    let newTodoList = todoList.filter((task) => { return task.key !== id })
    setTodoList(newTodoList)
    updateTodoList = newTodoList
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    todoList.filter((task) => {
      if (task.key === id) {
        task.isCompleted = !task.isCompleted
      }
    })
    setTodoList([...todoList])
    updateTodoList = [...todoList]
    saveToLS()
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoList"))
    if (data)
      setTodoList(data)
  }, [])

  return (
    <>
      <Navbar />
      <div className="container w-[100vw] md:w-[95vw] lg:w-[85vw] xl:w-[75vw] 2xl:w-[1000px] min-h-[80vh] bg-pink-100 items-center gap-4 flex flex-col mx-auto my-4 p-1 md:p-10 rounded-xl">
        <h1 className='text-4xl font-bold'>iTask - Manage Your Tasks at one place</h1>
        <h1 className='text-xl font-bold'>Add Task</h1>
        <div className="add-task flex flex-col md:flex-row items-center justify-center gap-1 md:gap-8 w-full">
          <input onChange={handleChange} value={todo} name='submit' id='submit' className='w-full rounded-lg px-4 py-1 border-2 border-[#bbb]' type="text" />
          <button onClick={handleAdd} disabled={todo.length <= 3} id='submit' name='submit' type='submit' className='border-2 border-[#6cf4be] bg-[#3bc9b4] px-4 py-1 text-white rounded-xl hover:scale-[1.01] active:scale-[0.95] text-xl font-medium disabled:bg-[#bce1e3] w-[80%] md:w-fit'>Save</button>
        </div>
        <h1 className='text-xl font-bold'>Your Tasks</h1>
        <div className="finished flex gap-3 w-full justify-start px-4">
          <input checked={finishedTask} onChange={(e) => { setFinishedTask(e.target.checked) }} type="checkbox" name="finishedTask" id="finishedTask" />
          <p>Finished Tasks</p>
        </div>
        <div className="h-[1px] bg-black w-full opacity-25"></div>
        <div className="tasks flex flex-col items-center justify-center gap-8 w-full">
          {todoList.length === 0 ? <h1 className='text-lg font-medium text-[#939191]'>No Tasks Added</h1> : ''}
          {todoList.map((task) => {
            return (
              (task.isCompleted === finishedTask) &&
              <Task key={task.key} task={{ ...task }} handleCheckbox={handleCheckbox} handleEdit={(e) => { handleEdit(task.key) }} handleDelete={(e) => { handleDelete(task.key) }} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
