import Todo from "./Todo";

function TodoList ({
    todos,
    addTodo,
    editTodoText,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
        <h1>This is Todo List </h1>

        <h1>Create Todo</h1>
        <input 
            type='text'
            onKeyDown={(e) => {
                e.key === 'Enter' && addTodo(e);
            }}
        />

        {todos.length 
            ? (
                <>
                <h1>Todo Items</h1>
                <ul>
                    {todos.map((todo) => {
                        return(
                            <Todo 
                            key={todo.id}
                            todo={todo}
                            editTodoText={editTodoText}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                            /> 
                        )
                    })}
                </ul>

            </>
            ) : (
            <h1>No Todos added yet</h1>
            )
        }
        </>
    )
}

export default TodoList;