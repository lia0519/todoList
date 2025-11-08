import type { Todo } from "../App";

type Props = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: Props) {
    const { id, text, done } = todo;
    
    return (
        <li className={`TodoItem ${done ? 'done' : ''}`}>
            <label className="left">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggle(id)}
                    aria-label={`${text} 완료 토글`}
                />
                <span className="text">{text}</span>
            </label>

            <button
                className="remove"
                onClick={() => onRemove(id)}
                aria-label={`${text} 삭제`}
            >X</button>
        </li>
    );
}