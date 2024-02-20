import { createSlice , nanoid } from "@reduxjs/toolkit";
//nanoid-> generate unique id
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


//creating of slice. (createSlice)-> It is a method
export const todoSlice = createSlice({  
    name: 'todo', //(name) is in the redux toolkit property
    initialState,

    //creating of reducers. It includes properties and function
    reducers: {
        //property--> addTodo, removeTodo
        addTodo: (state, action) => {  //addTodo: (state, action)--> syntax, state--> current state value in the store , state and action are two attributes of reducer function
            const todo = {
                id: nanoid(), //new value has sent to this id 
                text: action.payload 
            }  //yahan tak aapne todo banaya hai par vo abhi tak state tak nhi gya hai

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions //iss action me se value mil jayegi jaise addTodo , removeTodo

export default todoSlice.reducer