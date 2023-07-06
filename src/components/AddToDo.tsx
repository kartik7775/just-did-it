import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
    const [todo, setTodo] = useState("");
    const { handleAddToDo } = useTodos();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form__container">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    required
                    placeholder="type a task here..."
                />
                <button type="submit">🏃 Add</button>
            </div>
        </form>
    );
};

export default AddToDo;
