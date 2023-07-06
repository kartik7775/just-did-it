import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

    const [searchParams] = useSearchParams();
    const todosData = searchParams.get("todos");
    //     console.log(todosData);

    let filterData = todos;

    if (todosData === "active") {
        filterData = filterData.filter((task) => !task.completed);
    }

    if (todosData === "completed") {
        filterData = filterData.filter((task) => task.completed);
    }

    return (
        <ul className="main__task">
            {filterData.map((todo) => {
                return (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={`task-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`task-${todo.id}`}>&nbsp; {todo.task} &nbsp;</label>

                        {todo.completed && (
                            <button
                                type="button"
                                onClick={() => handleDeleteTodo(todo.id)}
                            >
                                🧹Delete
                            </button>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Todos;
