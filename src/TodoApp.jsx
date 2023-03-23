import React from 'react'
import { useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    const {data: todos = [], isLoading} = useGetTodosQuery()
    // console.log(something);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>is loading: {isLoading ? 'Is loading...' : 'Fetch done!'}</h4>

            <pre>...</pre>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <strong>{todo.completed ? ' - Done' : ' - Pending'}</strong>
                        </li>
                    ))
                }
            </ul>

            <button>Next Todo</button>


        </>
    )
}
