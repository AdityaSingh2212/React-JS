//context api cannot be used to make big projects instead of this redux is used
import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [    //array
        {
            id: 1,
            todo: " Todo msg", //title
            completed: false,  //by default giving false or unchecked
        }
    ],

    //functions
    addTodo: (todo) => {},// jaise hi aap (todo)->(ek message h ye) pass karoge ye kuch kaam karega which is represented by {}.
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider