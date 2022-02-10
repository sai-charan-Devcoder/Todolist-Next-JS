import { useState } from 'react'

const Index=()=>{


    const[userInput,setUserInput]=useState('')
    const[todoList,setTodoList]=useState([])

    const handleChange=(e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
        console.log(userInput)
    } 

    const handleSubmit =(e)=>{

        e.preventDefault()
        setTodoList([
            userInput,
            ...todoList]
        )

        setUserInput('')
        
    }

    const handleDelete=(todo)=>
    {

        const updatedArr=todoList
        .filter(todoItem=>todoList.indexOf(todoItem)!=todoList.indexOf(todo))
   
        setTodoList(updatedArr)
    }

    return(
        <div align="center">
        <h3>Next Js Todo List</h3>
        <form>
            <input type="text" onChange={handleChange} 
                             value={userInput} placeholder="Enter Todo Item"/>
                             
                             <br/><br/>
            <button onClick={handleSubmit} className="submit">Submit</button>
        </form>
        <ul>
            {
                todoList.length>=1?todoList.map((todo,idx)=>{
        return <li  key={idx}>{todo}<button onClick={(e)=>
                   { e.preventDefault()
                    handleDelete(todo)}}>Delete</button></li>

                })
                :'Enter the Todo Item'
            }
        </ul>
        </div>
    )
}

export default Index