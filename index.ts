import axios from "axios";
import { title } from "process";
interface ToDo{
    id: number,
    title: string,
    completed: boolean
}

const url = 'http://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(response=>{
    const todo = response.data as ToDo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title,completed)
    
})

const logTodo = (id: number, title: string, completed: boolean)=>{
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}`)
}