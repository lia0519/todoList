import type { Todo } from "../App";
import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};


export default function TodoList({ todos, onToggle, onRemove }: Props) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((t) => (
                    <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </ul>            
        </div>
    );
}