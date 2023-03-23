
import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
    // const {data: todos = [], isLoading} = useGetTodosQuery()
    const {data: todo, isLoading} = useGetTodoQuery(todoId);
    
    const handleNextTodo = () => {
        setTodoId(todoId + 1)
    }

    const handlePrevTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>is loading: {isLoading ? 'Is loading...' : 'Fetch done!'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button
                onClick={handlePrevTodo}
            >Prev Todo</button>
            <button
                onClick={handleNextTodo}
            >Next Todo</button>
            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <strong>{todo.completed ? ' - Done' : ' - Pending'}</strong>
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
