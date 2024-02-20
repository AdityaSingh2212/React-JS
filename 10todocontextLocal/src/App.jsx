import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])  //for storage and change in UI and its value is be default empty array




  //yahan pe humare paas individual todo message nhi h kyun ki (todos) me saare message store hai, ye ek array hai
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )// hum previous state change krna chahte hai na ki sab delete krke ek naya kardo
  }




  // const updateTodo = (id, todo)--> agar saare messages me se ye id match ho rha h kisi se to uss individual message ko update kardo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

  //(.map)--> har todo mil jayega which is a object which has id. It works as a loop
  //? --> agar true hai to ye karo varna ye karo
    
  }




  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) 
    //!== -> match nhi karna chahiye, jo message match nhi karega vo aata jayega aur jo kar jayega vo nhi aayega
    // for deleting instead of using .map we can use .filter which also acts as a loop
  }




  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => //har previous state ka access
    prev.map((prevTodo) => //prevTodo is a value that has been passed
      prevTodo.id === id ? { ...prevTodo, //Id ko compare karna hai
        completed: !prevTodo.completed } : prevTodo))
        //kya yeh prevTodo match karta hai id se agar ho rhi h to jo completed property by default false hai usko true krdo or nhi ho rhi to usko false hi rehne do
  }



                          //Local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) 
    //("todos")--> we have to tell key value if you want to get item therefore we have taken (todos) as a key. You can name the key anything you want
    //These values are in string and we want these values in JSON therefore we will convert it in JSON and store it in variable(todos)

    if (todos && todos.length > 0) {
      setTodos(todos) //call setTodos and pass (todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    //for wrapping or providing (TodoProvider)
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App